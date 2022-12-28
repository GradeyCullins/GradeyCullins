import { useState } from 'react'
import MemeButton from '../components/MemeButton'

const Projects = () => {
  const [isCodeImgVisible, setCodeImgVisible] = useState(false)
  const [isGoogleImgVisible, setGoogleImgVisible] = useState(false)

  return (
    <section className="content-sec">
      <h1 className="f1 lh-solid mt0 helvetica">Projects</h1>
      <section>
        My <a href="https://github.com/GradeyCullins" target="_blank">Github</a> is a good way to check out some of my recent projects.
        <p>Some of my recent projects:</p>
        <ul className="sq-li">
          <li>
            <a href="https://github.com/GradeyCullins/purity-vision" target="_blank">Purity Vision</a>
            <ul>
              <li>My latest project that uses the ML-based Google Vision API to auto-remove any images on the web
                deemed to have adult or gore content.</li>
            </ul>
          </li>
          <li>
            <a href="https://uofu-skybin.github.io/index.html" target="_blank">Skybin</a>
            <ul>
              <li>
                A p2p file storage system for my senior capstone group project.
              </li>
            </ul>
            <ul>
              <li>I worked on the <a href="https://github.com/uofu-skybin/skybin-portal" target="_blank">front-end</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://github.com/GradeyCullins/GradeyCullins" target="_blank">This website</a>
          </li>
          <li>
            A multi-threaded <a href="https://github.com/GradeyCullins/QT-Server" target="_blank">web server</a> in c++
          </li>
        </ul>

        {/* How I feel when I'm cooooooding. */}
        <span className="meme-btn">
          <MemeButton
            text="How I feel when I'm writing code"
            smolText='when coding'
            onClick={() => setCodeImgVisible(!isCodeImgVisible)}
          />
        </span>
        { isCodeImgVisible && <img className="w-100 meme-img" src="/img/how-i-feel.gif" alt="" /> }
        

        {/* What I'm actually doing xdxd */}
        <span className="meme-btn">
          <MemeButton
            text="What I'm actually doing"
            smolText='actually'
            onClick={() => setGoogleImgVisible(!isGoogleImgVisible)}
          />
        </span>
         { isGoogleImgVisible && <img className="w-100 meme-img" src="/img/google.png" alt="" /> }

      </section>
    </section>
  )
}
export default Projects