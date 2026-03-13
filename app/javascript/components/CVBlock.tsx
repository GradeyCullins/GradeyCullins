import WideBlockSection from "./WideBlockSection.tsx";
import ContentWrapper from "./ContentWrapper.tsx";
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
    <WideBlockSection>
      <ContentWrapper>
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-bold text-4xl">Curriculum Vitae</h1>
          <a
            href="/cv/download"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download PDF
          </a>
        </div>

        <hr className="mb-6" />

        <div className="max-w-[1200px] rounded-md">
          {intro && (
            <div className="mb-6 flex items-center gap-3">
              <a href={intro.linkedinUrl} target="_blank" rel="noreferrer" title="LinkedIn">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <a href={intro.githubUrl} target="_blank" rel="noreferrer" title="GitHub">
                <img src={GitHubIcon} alt="GitHub" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <a href={`mailto:${intro.email}`} title={intro.email}>
                <img src={GmailIcon} alt="Email" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          )}

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
              <hr className="my-2" />
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
      </ContentWrapper>
    </WideBlockSection>
  )
}
