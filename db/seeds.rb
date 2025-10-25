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
