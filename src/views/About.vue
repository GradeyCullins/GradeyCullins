<template>
  <div id="left_column">
      <div id="about">
        <!-- Introduction -->
        <article id="bio">
          <section class="content-sec">
            <!-- Use a media query to show the shorter word when mobile screen is too small. -->
            <h1 class="mob-title f1 lh-solid mt0 helvetica">Intro</h1>
            <h1 class="pc-title f1 lh-solid mt0 helvetica">Introduction</h1>
            <ul class="list gc-list">
              <li>
                <a href="/resources/CS_Resume_Gradey_Cullins_1_8_18_FINAL.pdf" target="_blank">resum&eacute;</a>
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
            </ul>
            <p>
              Welcome to my website. I am a senior at the
              <a href="http://www.utah.edu/" target="_blank">University of Utah</a>
              majoring in computer science.
            </p>
            <p>
              I am currently employed by
              <a href="https://hoodoo.digital/" target="_blank">Hoodoo Digital</a>
              as a software developer, where I mostly write JavaScripts.
            </p>
            <p>Some of my interests include: cryptocurrencies, computer networking, computer games, fitness, and world events.</p>
            <p>
              Something that hooked me into web programming and computer networking is the story of Ross Ulbricht, the
              inventor of the Silk Road. I highly recommend reading Wired's
            <a target="_blank" href="https://www.wired.com/2015/04/silk-road-1/">writeup</a> on his story if you want to learn more.
            </p>
          </section>

          <!-- Talk about recent projects I've worked on or contributed to. -->
          <section class="content-sec">
            <h1 class="f1 lh-solid mt0 helvetica">Projects</h1>
            <section>
              My
              <a href="https://github.com/GradeyCullins" target="_blank">Github</a>
              is a good way to check out some of my recent projects.
              <p>Some of my recent projects/contributions:</p>
              <ul class="gc-list">
                <li>
                    My senior capstone project called
                    <a href="https://uofu-skybin.github.io/index.html" target="_blank">Skybin</a>,
                    a peer-to-peer file storage system
                  <ul>
                    <li>I worked on the <a href="https://github.com/uofu-skybin/skybin-portal" target="_blank">front-end</a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://github.com/GradeyCullins/GradeyCullins" target="_blank">This website</a>
                </li>
                <li>
                  A multi-threaded
                  <a href="https://github.com/GradeyCullins/QT-Server" target="_blank">web server</a>
                  in c++
                </li>
              </ul>
            </section>
          </section>

          <section class="content-sec">
            <h1 class="f1 lh-solid mt0 helvetica">Skillz</h1>
            <p>
              While my current professional work primarily consists of working on
              <a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank">SPAs</a>,
              I consider my skillset to reach beyond
              the domain of web development.
            </p>
            <p>
              I have years of experience developing in macOS, GNU/Linux, and Windows operating systems, with
              a strong preference for working in unix-y OSes. I am competent with CLIs and in writing Bash or Powershell scripts for common use cases.
              I am familiar with common network debugging tools like Wireshark, curl, netstat, etc.
            </p>
            <p>
              I take an active interest in improving my ability to function as a dev ops engineer, and as a result I think this puts me in a better
              position to handle full-stack development, deployment, and debugging than the typical web developer.
            </p>
            <p>
              Below is a rough ordering of my ability with modern programming languages that I currently use or have used recently.
            </p>
            <!-- Ability with programming languages. -->
            <section>
              <ol>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>Bash</li>
                <li>C#</li>
                <li>C++</li>
              </ol>
            </section>

          </section>

          <!-- Talk about my feelings on random technology stuff. -->
          <section class="content-sec">
            <!-- Use a media query to show the shorter word when mobile screen is too small. -->
            <h1 class="mob-title f1 lh-solid mt0 helvetica">Thoughts on tech</h1>
            <h1 class="pc-title f1 lh-solid mt0 helvetica">Thoughts on technology</h1>
            <!-- Thoughts on JavaScript. -->
            <section>
              <h1 class="helvetica f4">JavaScript</h1>
              <p>
                I enjoy writing simple web pages like this one using the HTML5, CSS3, JavaScript stack. It makes me feel like
                a much better programmer than I am!
              </p>
              <p>
                My first experience with JavaScript was with JQuery and Angular.js (Angular 1). My feelings at the time
                were that JQuery is great up until the project gets very big, and that Angular.js is generally hard to
                understand with wierd concepts like $scope. Needless to say, my desire to write JavaScript dwindled considerably.
              </p>
              <p>
                Things turned around after I spent some time learning Angular 2 (which is entirely different than Angular 1)
                and then later Vue which I've been writing a lot of lately.
              </p>
              <p>
                Back when I was writing Angular code, I appreciated Typescript's offering of hard typing and strict
                enforcement of semicolons. Since taking up Vue, I've adopted
                <a href="https://standardjs.com/" target="_blank">Javascript Standard Style</a>,
                which instead drops semicolons and leaves JavaScript in its original untyped form.
              </p>
            </section>

            <!-- Editors and IDEs. -->
            <section>
              <h1 class="helvetica f4">editors</h1>
              <p>
                When I'm hacking on an ssh terminal I can't be bothered to use anything but Vim, although I do
                love the common Emacs shortcuts for general OS navigation.
              </p>
              <p>
                Visual Studio Code and Jetbrains IDEs are my go-tos for serious development on big projects.
              </p>
            </section>

            <section>
              <div>
                <h1 class="helvetica f4">cryptocurrency</h1>
                <div class="">
                  <div class="coin-price">
                    <img class="coin-img" src="/img/btc.png">
                    <span v-if="btc">${{roundedCoinPrice(btc.quotes.USD.price)}}</span>
                    <span :class="{
                      'pos': btc.quotes.USD.percent_change_24h > 0,
                      'neg': btc.quotes.USD.percent_change_24h < 0
                    }">
                      ({{btc.quotes.USD.percent_change_24h}}%)
                    </span>
                  </div>
                  <div class="coin-price">
                    <img class="coin-img" src="/img/xmr.png">
                    <span v-if="xmr">${{roundedCoinPrice(xmr.quotes.USD.price)}}</span>
                    <span :class="{
                      'pos': xmr.quotes.USD.percent_change_24h > 0,
                      'neg': xmr.quotes.USD.percent_change_24h < 0
                    }">
                      ({{xmr.quotes.USD.percent_change_24h}}%)
                    </span>
                  </div>
                  <div class="coin-price">
                    <img class="coin-img" src="/img/req.png">
                    <span v-if="req">${{roundedCoinPrice(req.quotes.USD.price)}}</span>
                    <span :class="{
                      'pos': req.quotes.USD.percent_change_24h > 0,
                      'neg': req.quotes.USD.percent_change_24h < 0
                    }">
                    <span>
                      ({{req.quotes.USD.percent_change_24h}}%)
                    </span>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                As a college student, I don't have the ability to make a lot of investments. One kind of investment
                that I make an exception for is
                <a href="https://splinternews.com/hey-idiots-youre-gonna-lose-all-your-money-on-bitcoin-1820805131" target="_blank">
                  fake internet money</a> otherwise known as cryptocurrency. Which coins might you ask? Currently I'm holding
                <a href="https://bitcoin.org" target="_blank">BTC</a>,
                <a href="https://getmonero.org/" target="_blank">XMR</a>, and
                <a href="https://request.network/" target="_blank">REQ</a>.
                Bitcoin is the grand daddy, XMR has the most practical usage, and REQ takes
                an oracle-based approach that seeks to bridge the gap between existing monolithic financial systems and block chain technology.
              </p>

              <p>
                My hypothesis on the long-term viability of cryptocurrencies is as follows:
              </p>
              <blockquote>
                In a world plagued by inflation caused largely in part by irresponsible and malicious
                central banking and bloated government beauracracies, crytpocurrencies flourish while fiat currencies flounder. The central component of
                bitcoin and other coins, the blockchain, is a technological marvel. Blockchains act as decentralized and pseudo-anonymous
                ledgers that are used to verify the legitimacy of cryptocurrency transactions over computer networks.
              </blockquote>
            </section>
          </section>

          <section>
            <h1 class="f1 lh-solid mt0 helvetica">Closing</h1>
            <p>
              My hope is that this site gives the reader a little insight into my thoughts and experiences as a software developer. Don't hesitate to reach out
              if you have any questions. Thanks for reading!
            </p>
          </section>
        </article>
      </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'About',
  data () {
    return {
      btc: null,
      xmr: null,
      req: null
    }
  },
  created () {
    const btcProm = this.getCoinData(1)
    const xmrProm = this.getCoinData(328)
    const reqProm = this.getCoinData(2071)

    // Wait for all the coin async loads to complete
    Promise.all([btcProm, xmrProm, reqProm]).then(coinRes => {
      for (const coin of coinRes) {
        switch (coin.data.symbol) {
          case 'BTC':
            this.btc = coin.data
            break
          case 'XMR':
            this.xmr = coin.data
            break
          case 'REQ':
            this.req = coin.data
            break
        }
      }
    })
  },
  methods: {
    getCoinData: async function (id) {
      try {
        const res = await axios.get(`https://api.coinmarketcap.com/v2/ticker/${id}/`)
        return {
          err: null,
          data: res.data.data
        }
      } catch (err) {
        console.log(err)
        return {
          err: err,
          data: null
        }
      }
    },
    roundedCoinPrice (price) {
      return Math.round(price * 100) / 100
    }
  }
}

</script>

<style scoped>
.mob-title {
    display: none;
}
.pc-title {
    display: block;
}
@media only screen
    and (max-width : 400px)
{
    .mob-title {
        display: block;
    }

    .pc-title {
        display: none;
    }
}

#left_column {
  padding: 1rem;
}

.content-sec {
  margin-bottom: 2rem;
  border-bottom: 1px solid #999;
}

.content-sub {
  text-decoration: underline;
}

#crypto-header {
  display: inline-block;
  margin-right: 2em;
}

.coin-price {
  font-size: 0.75rem;
  display: inline-block;
  margin-right: 1rem;
}

@media only screen
  and (max-width: 700px)
{
  .coin-price {
    display: block;
    margin-bottom: 1rem;
  }
}

.coin-img {
  height: 1.5em;
  margin-right: 0.5em;
  vertical-align: middle;
}

.pos {
  color: #35e135;
}

.neg {
  color: #ec8a8a;
}

.gc-list {
  list-style: square;
}
</style>
