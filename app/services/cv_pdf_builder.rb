require "prawn-svg"

class CvPdfBuilder
  FONT_SIZE_NAME     = 20
  FONT_SIZE_HEADING  = 14
  FONT_SIZE_SUBHEAD  = 11
  FONT_SIZE_BODY     = 10
  FONT_SIZE_SMALL    = 9
  ICON_SIZE          = 11
  ICON_GAP           = 8
  COLOR_HEADING      = "1a1a1a"
  COLOR_BODY         = "333333"
  COLOR_MUTED        = "666666"
  LINE_COLOR         = "cccccc"

  LINKEDIN_ICON_PATH = Rails.root.join("app/javascript/assets/icons/linked-in.svg")
  GITHUB_ICON_PATH   = Rails.root.join("app/javascript/assets/icons/github.svg")
  EMAIL_ICON_PATH    = Rails.root.join("app/javascript/assets/icons/gmail.svg")

  def initialize(intro:, roles:, educations:)
    @intro = intro
    @roles = roles
    @educations = educations
  end

  def render
    Prawn::Document.new(
      page_size: "LETTER",
      margin: [ 54, 54, 54, 54 ] # 0.75 inch margins
    ) do |pdf|
      setup_fonts(pdf)
      render_header(pdf)
      render_summary(pdf) if @intro
      render_experience(pdf) if @roles.any?
      render_education(pdf) if @educations.any?
    end.render
  end

  private

  def setup_fonts(pdf)
    Prawn::Fonts::AFM.hide_m17n_warning = true

    pdf.font_families.update(
      "Helvetica" => {
        normal: "Helvetica",
        bold: "Helvetica-Bold",
        italic: "Helvetica-Oblique",
        bold_italic: "Helvetica-BoldOblique"
      }
    )
    pdf.font "Helvetica"
    pdf.default_leading 3
  end

  def render_header(pdf)
    header_y = pdf.cursor

    pdf.fill_color COLOR_HEADING
    pdf.text_box "Gradey Cullins",
                 at: [ pdf.bounds.left, header_y ],
                 size: FONT_SIZE_NAME,
                 style: :bold,
                 height: 24

    render_contact_line(pdf, header_y) if @intro

    pdf.move_down 20
    pdf.stroke_color LINE_COLOR
    # pdf.stroke_horizontal_rule
  end

  def render_contact_line(pdf, header_y)
    name_width = pdf.width_of("Gradey Cullins", size: FONT_SIZE_NAME, style: :bold)
    x = pdf.bounds.left + name_width + 14
    y = header_y - 3
    icons = [
      [ LINKEDIN_ICON_PATH, @intro.linkedin_url ],
      [ GITHUB_ICON_PATH, @intro.github_url ],
      [ EMAIL_ICON_PATH, "mailto:#{@intro.email}" ]
    ]

    icons.each do |icon_path, href|
      svg_data = File.read(icon_path)
      pdf.svg(svg_data, at: [ x, y ], width: ICON_SIZE, height: ICON_SIZE)
      add_icon_link(pdf, x, y, href)
      x += ICON_SIZE + ICON_GAP
    end
  end

  def add_icon_link(pdf, x, y, href)
    abs_x = pdf.bounds.absolute_left + x
    abs_y = pdf.bounds.absolute_bottom + y

    pdf.canvas do
      pdf.link_annotation(
        [ abs_x, abs_y - ICON_SIZE, abs_x + ICON_SIZE, abs_y ],
        Border: [ 0, 0, 0 ],
        A: {
          Type: :Action,
          S: :URI,
          URI: PDF::Core::LiteralString.new(href)
        }
      )
    end
  end

  def render_summary(pdf)
    # section_heading(pdf, "SUMMARY")
    pdf.fill_color COLOR_BODY
    pdf.text @intro.summary, size: FONT_SIZE_BODY
    pdf.move_down 14
  end

  def render_experience(pdf)
    section_heading(pdf, "EXPERIENCE")

    @roles.each_with_index do |role, index|
      # Title line with date range right-aligned
      pdf.fill_color COLOR_HEADING
      title_text = "#{role.title} @ #{role.company}"
      date_text = role.date_range

      # Use a bounding box approach for title + date on same line
      pdf.float do
        pdf.fill_color COLOR_MUTED
        pdf.text_box date_text,
          size: FONT_SIZE_SMALL,
          at: [ pdf.bounds.width - pdf.width_of(date_text, size: FONT_SIZE_SMALL), pdf.cursor ],
          width: pdf.width_of(date_text, size: FONT_SIZE_SMALL) + 2
      end
      pdf.fill_color COLOR_HEADING
      pdf.text title_text, size: FONT_SIZE_SUBHEAD, style: :bold

      pdf.move_down 3
      pdf.fill_color COLOR_BODY
      pdf.text role.description, size: FONT_SIZE_BODY

      if role.highlights.present?
        pdf.move_down 3
        role.highlights.each do |highlight|
          pdf.fill_color COLOR_BODY
          pdf.indent(12) do
            pdf.text "\u2022  #{highlight}", size: FONT_SIZE_SMALL
          end
        end
      end

      pdf.move_down(index == @roles.length - 1 ? 14 : 10)
    end
  end

  def render_education(pdf)
    section_heading(pdf, "EDUCATION")

    @educations.each do |edu|
      pdf.float do
        pdf.fill_color COLOR_MUTED
        date_text = edu.date_range
        pdf.text_box date_text,
          size: FONT_SIZE_SMALL,
          at: [ pdf.bounds.width - pdf.width_of(date_text, size: FONT_SIZE_SMALL), pdf.cursor ],
          width: pdf.width_of(date_text, size: FONT_SIZE_SMALL) + 2
      end
      pdf.fill_color COLOR_HEADING
      pdf.text "#{edu.degree} @ #{edu.institution}", size: FONT_SIZE_SUBHEAD, style: :bold
    end
  end

  def section_heading(pdf, title)
    pdf.fill_color COLOR_HEADING
    pdf.text title, size: FONT_SIZE_HEADING, style: :bold
    pdf.move_down 2
    pdf.stroke_color LINE_COLOR
    pdf.stroke_horizontal_rule
    pdf.move_down 8
  end
end
