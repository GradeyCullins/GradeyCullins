class CvController < ApplicationController
  def index
    render inertia: "CVPage", props: {
      intro: cv_intro&.as_json,
      roles: cv_roles.map(&:as_json),
      educations: cv_educations.map(&:as_json)
    }
  end

  def download
    pdf_data = ::CvPdfBuilder.new(
      intro: cv_intro,
      roles: cv_roles,
      educations: cv_educations
    ).render

    send_data pdf_data,
              filename: "gradey_cullins_resume.pdf",
              type: "application/pdf",
              disposition: "attachment"
  end

  private

  def cv_intro
    @cv_intro ||= CvIntro.first
  end

  def cv_roles
    @cv_roles ||= CvRole.ordered.to_a
  end

  def cv_educations
    @cv_educations ||= CvEducation.ordered.to_a
  end
end
