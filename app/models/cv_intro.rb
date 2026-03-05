class CvIntro < ApplicationRecord
  validates :summary, presence: true
  validates :linkedin_url, presence: true
  validates :github_url, presence: true
  validates :email, presence: true

  def as_json(options = nil)
    {
      id: id,
      summary: summary,
      linkedinUrl: linkedin_url,
      githubUrl: github_url,
      email: email
    }
  end
end
