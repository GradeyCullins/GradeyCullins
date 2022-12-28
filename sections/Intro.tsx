import { useState } from 'react'
import MemeButton from '../components/MemeButton'

const Intro = () => {
  const [isImgVisible, setIsImgVisible] = useState(false)

  return (
    <section className="content-sec">
      <h1 className="f-subheadline-ns f1 helvetica lh-solid mt0 mb3">
        <small className="f2-ns f3 db">Welcome To</small>
        gc
        <br />
        (DOT)
        <br />
        com
      </h1>

      <ul className="pl4 f4 pl2 list-square">
        <li>
          <a href="/static/resume.pdf" target="_blank">resum&eacute;</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gradey-cullins-738b2045?trk=nav_responsive_tab_profile_pic" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/GradeyCullins" target="_blank">Github</a>
        </li>
        <li>
          <a href="mailto:gradeycullins@gmail.com">email</a>
        </li>
        <li>
          <a id="blog-link" target="blank">blog</a>
        </li>
      </ul>

      <figure className="fl mw-100 w-third-ns w-50 ma0 pa0 mr3 mt2 mb2">
        <img
          className="ba"
	       src="https://d1bbnjcim4wtri.cloudfront.net/wp-content/uploads/2020/02/01105300/Winter-Health-Campus-View-2018-7-scaled.jpg"
        /> 
        <figcaption className="ma0 pa0 helvetica f7 fw3 i">Salt Lake City, UT</figcaption>
      </figure>

      <p>
        Hello, I am a computer programmer with a degree in Computer Science from the <a href="http://www.utah.edu/" target="_blank">University of Utah</a>. I currently live in Salt Lake City.
      </p>

      <p>
       My last three or so years of professional experience have found me mostly writing JavaScripts and Golang and pulling my hair out with Kubernetes and Docker. 
      </p>

      <p>
        Outside of work I take an active interest in cryptocurrencies, computer networking, E-Sports, fitness and food,
        and memes and pop culture.
      </p>

      {/* Link to Ross story somewhere else */}
      {/* <p>
        What got me hooked me into web programming and computer networking is the story of Ross Ulbricht, the
        inventor of the Silk Road. I highly recommend reading Wired's
        <a target="_blank" href="https://www.wired.com/2015/04/silk-road-1/">writeup</a> on his story if you want to
        learn more.
      </p> */}

      <div>
        <span className="meme-btn">
          <MemeButton
            text='Would you like to know more?'
            smolText='learn more?'
            onClick={() => setIsImgVisible(!isImgVisible)}
          />
        </span>
        { isImgVisible &&
          <img className="mb3 meme-img" src="/img/desire_to_know_more_intensifies.gif" alt="" />
        }
      </div>
    </section>
  )
}

export default Intro
