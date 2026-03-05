require "test_helper"

class CvControllerTest < ActionDispatch::IntegrationTest
  setup do
    CvIntro.create!(
      summary: "Senior full stack developer",
      linkedin_url: "https://www.linkedin.com/in/gradey-cullins-738b2045/",
      github_url: "https://github.com/GradeyCullins",
      email: "gradeycullins@gmail.com"
    )

    CvRole.create!(
      title: "Software Engineer",
      company: "Acme",
      description: "Building web apps",
      highlights: [ "shipped feature X" ],
      start_date: "2024",
      end_date: nil,
      position: 0
    )

    CvEducation.create!(
      institution: "University of Utah",
      degree: "Computer Science",
      start_date: "2013",
      end_date: "2018",
      position: 0
    )
  end

  test "index renders successfully" do
    get cv_url
    assert_response :success
  end

  test "download returns a pdf attachment" do
    get cv_download_url

    assert_response :success
    assert_equal "application/pdf", response.media_type
    assert_includes response.headers["Content-Disposition"], "attachment"
    assert_includes response.headers["Content-Disposition"], "gradey_cullins_resume.pdf"
    assert response.body.start_with?("%PDF"), "Expected PDF binary header"
  end
end
