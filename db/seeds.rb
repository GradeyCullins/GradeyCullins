# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

return unless defined?(BlogPost) && defined?(Tag)

puts "Seeding tags..."
tag_definitions = [
  { name: "Announcements", slug: "announcements" },
  { name: "Dev Log", slug: "dev-log" },
  { name: "Rails", slug: "rails" },
  { name: "Tooling", slug: "tooling" },
  { name: "Consulting", slug: "consulting" },
  { name: "Personal", slug: "personal" }
]

tags_by_slug = tag_definitions.each_with_object({}) do |attrs, memo|
  tag = Tag.find_or_initialize_by(slug: attrs[:slug])
  tag.name = attrs[:name]
  tag.save!
  memo[attrs[:slug]] = tag
end

puts "Seeding blog posts..."
now = Time.zone.now
post_definitions = [
  {
    title: "Shipping the 2025 Portfolio Refresh",
    slug: "shipping-the-2025-portfolio-refresh",
    excerpt: "A quick rundown of the design decisions, animations, and copy updates that went into the 2025 version of my site.",
    content_mdx: <<~MDX,
      ## Why I rebuilt everything

      I had too many half-finished experiments sprinkled across my old portfolio. Rebuilding the whole stack with Rails 8, Inertia, and MDX let me keep the expressive writing workflow without the yak-shaving.

      ## Highlights

      - motion that feels intentional instead of noisy
      - MDX content blocks that map right into the component library
      - a color system that leans on CSS variables so theme tweaks are painless

      In the coming weeks I will document how the gradients, typography, and accessibility first workflows came together.
    MDX
    status: :published,
    published_at: now - 2.weeks,
    tag_slugs: %w[announcements dev-log personal]
  },
  {
    title: "Rails 8 + Inertia migration notes",
    slug: "rails-8-inertia-migration-notes",
    excerpt: "Notes from moving the site from Rails 7/Turbo to Rails 8 with Inertia and Vite, including what broke and how I patched it.",
    content_mdx: <<~MDX,
      ## The migration plan

      I started by upgrading to Ruby 3.4 and Rails 8 in lockstep. Running the test suite with `bin/rails test` after every dependency bump surfaced the breakage early.

      ### Inertia specifics

      - `app/javascript/pages` now mirrors the controller structure
      - shared props flow through a simple presenter object so controllers stay thin
      - Vite handles both TypeScript transpilation and asset fingerprints

      The end result is a stack that stays familiar to Rails folks but feels modern when iterating on the front end.
    MDX
    status: :published,
    published_at: now - 10.days,
    tag_slugs: %w[rails dev-log tooling]
  },
  {
    title: "Consulting stack for 2025",
    slug: "consulting-stack-2025",
    excerpt: "The tools, services, and rituals I am leaning on for indie consulting this year, from monitoring to proposals.",
    content_mdx: <<~MDX,
      ## What stays in the toolkit

      - Rails + Postgres for the default full-stack combo
      - Astro for tiny content sites that do not justify a full Rails deployment
      - Buttondown, Paddle, and Cloudflare for email, payments, and DNS respectively

      ## Rituals that help

      A weekly retro keeps retainer clients aligned, and a small playbook of automation (Zapier + cron jobs) saves hours every month.
    MDX
    status: :published,
    published_at: now - 4.days,
    tag_slugs: %w[consulting tooling personal]
  }
]

post_definitions.each do |definition|
  tag_slugs = definition.delete(:tag_slugs)
  post = BlogPost.find_or_initialize_by(slug: definition[:slug])
  post.assign_attributes(definition)
  post.save!
  post.tags = tag_slugs.map { |slug| tags_by_slug.fetch(slug) }
end

puts "Seeded #{BlogPost.count} blog posts with tags."

# ── CV Data ──────────────────────────────────────────────────────────────────

puts "Seeding CV intro..."
cv_intro = CvIntro.first_or_initialize
cv_intro.assign_attributes(
  summary: "Senior full stack developer with experience in healthcare, finance, and B2B enterprise software.",
  linkedin_url: "https://www.linkedin.com/in/gradey-cullins-738b2045/",
  github_url: "https://github.com/GradeyCullins",
  email: "gradeycullins@gmail.com"
)
cv_intro.save!

puts "Seeding CV roles..."
cv_roles = [
  {
    title: "Software Developer II",
    company: "TruHearing",
    company_url: "https://truhearing.com",
    description: "Building an enterprise healthcare app with React, Ruby on Rails, Postgres, and AWS.",
    highlights: [
      "built sophisticated insurance claim 837 payer routing system",
      "enhancing insurance claim generation and order workflow features",
      "add query optimizations resulting in 50-125% latency reduction",
      "helping roll out AI assisted development department wide",
      "add pusher.js for websockets-based communication between server and client for real-time order delivery notifications"
    ],
    start_date: "2024",
    end_date: nil,
    position: 0
  },
  {
    title: "Senior Software Engineer",
    company: "ICS Advanced Technologies",
    company_url: nil,
    description: "I built microservices with Golang and MySQL and a responsive web application in React.",
    highlights: [
      "built an authentication system using modern cryptographic standards",
      "helped decompose a Ruby monolith into Golang modules and microservices"
    ],
    start_date: "2023",
    end_date: "2024",
    position: 1
  },
  {
    title: "Founding Software Engineer",
    company: "Radom",
    company_url: nil,
    description: "Acted as the lead engineer and architected Web3 apps with Vue, React, Rust and the Solidity smart contract language.",
    highlights: [
      "developed a permission + role system in Solidity",
      "implemented Solidity diamond pattern for complex Solidity payments contract"
    ],
    start_date: "2021",
    end_date: "2023",
    position: 2
  },
  {
    title: "Software Engineer",
    company: "Hoodoo",
    company_url: nil,
    description: "Worked on a small team building a custom cloud suite that manages Adobe AEM instances using Golang, Vue and Kubernetes.",
    highlights: [
      "built custom Github, Gitlab, and Bitbucket pipelines for CI/CI AEM deployment",
      "built async CLI task running tool in Node.jS for local AEM development",
      "built automated Adobe resource downloader tool"
    ],
    start_date: "2018",
    end_date: "2021",
    position: 3
  },
  {
    title: "Software Engineer",
    company: "Navitaire",
    company_url: nil,
    description: "Worked on a large team building features for an E-Commerce travel booking software in Angular, C#, and .NET.",
    highlights: [
      "improved Angular features by 50-75% by refactoring syncronous network requests into async requests",
      "developed API testing suite using the Postman CLI and Powershell scripts"
    ],
    start_date: "2017",
    end_date: "2018",
    position: 4
  }
]

cv_roles.each do |attrs|
  role = CvRole.find_or_initialize_by(company: attrs[:company], title: attrs[:title])
  role.assign_attributes(attrs)
  role.save!
end

puts "Seeding CV education..."
CvEducation.find_or_create_by!(
  institution: "University of Utah",
  degree: "Computer Science",
  start_date: "2013",
  end_date: "2018",
  position: 0
)

puts "Seeded CV data: #{CvIntro.count} intro(s), #{CvRole.count} role(s), #{CvEducation.count} education(s)."
