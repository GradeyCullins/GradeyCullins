import {CvIntro, CvRole, CvEducation} from "../types.ts";
import LinkedInIcon from "/assets/icons/linked-in.svg"
import GitHubIcon from "/assets/icons/github.svg"
import GmailIcon from "/assets/icons/gmail.svg"

interface CVBlockProps {
  intro: CvIntro | null
  roles: CvRole[]
  educations: CvEducation[]
}

export default function CVBlock({intro, roles, educations}: CVBlockProps) {
  return (
    <section className="w-full">
      <article className="cv-document border border-gray-200 bg-white px-5 py-7 shadow-2xl shadow-gray-950/10 sm:px-8 sm:py-10 md:px-12 lg:px-14">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-gray-500">Resume</p>
            <h1 className="mt-2 text-3xl font-black leading-none tracking-normal text-gray-950 sm:text-4xl">Gradey Cullins</h1>
            <p className="mt-2 text-base font-bold text-gray-600">Senior Software Engineer</p>
          </div>
          {intro && (
            <div className="flex items-center gap-2 sm:pt-2">
              <a
                href={intro.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-950 hover:shadow-lg hover:shadow-gray-950/10"
              >
                <img src={LinkedInIcon} alt="LinkedIn" className="h-5 w-5 opacity-70 transition-opacity hover:opacity-100" />
              </a>
              <a
                href={intro.githubUrl}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-950 hover:shadow-lg hover:shadow-gray-950/10"
              >
                <img src={GitHubIcon} alt="GitHub" className="h-5 w-5 opacity-70 transition-opacity hover:opacity-100" />
              </a>
              <a
                href={`mailto:${intro.email}`}
                title={intro.email}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-950 hover:shadow-lg hover:shadow-gray-950/10"
              >
                <img src={GmailIcon} alt="Email" className="h-5 w-5 opacity-70 transition-opacity hover:opacity-100" />
              </a>
            </div>
          )}
        </div>

        <div>
          {intro && (
            <>
              <h2>About</h2>
              <div className="about-section">
                <p>{intro.summary}</p>
              </div>
            </>
          )}

          {roles.length > 0 && (
            <>
              <h2>Roles</h2>
              {roles.map((role) => (
                <div key={role.id} className="about-section">
                  <div>
                    <h3>
                      {role.title}
                      <svg className="inline-block w-4 h-4 mx-1.5 -mt-0.5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                      {role.companyUrl ? (
                        <a className="link" href={role.companyUrl} target="_blank" rel="noreferrer">
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </h3>
                    <p>{role.description}</p>
                    {role.highlights.length > 0 && (
                      <ul>
                        {role.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className="when">{role.dateRange}</p>
                </div>
              ))}
            </>
          )}

          {educations.length > 0 && (
            <>
              <h2>Education</h2>
              {educations.map((edu) => (
                <div key={edu.id} className="about-section">
                  <div>
                    <h3>
                      {edu.degree}
                      <svg className="inline-block w-4 h-4 mx-1.5 -mt-0.5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                      {edu.institution}
                    </h3>
                  </div>
                  <p className="when">{edu.dateRange}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </article>
    </section>
  )
}
