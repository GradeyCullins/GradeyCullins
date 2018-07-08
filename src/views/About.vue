<template>
  <div id="left_column">
      <div id="about">
        <!-- bio -->
        <article id="bio">
          <section class="content-sec">
           <h1 class="f1 lh-solid mt0 helvetica">Introduction</h1>
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
             inventor of the Silk Road. I highly recommend reading Wired's writeup on
           <a target="_blank" href="https://www.wired.com/2015/04/silk-road-1/">his story</a> if you want to learn more.
           </p>
          </section>

          <section class="content-sec">
            <h1 class="f1 lh-solid mt0 helvetica">Technology</h1>
            <!-- Thoughts on JavaScript. -->
            <section>
              <h1 class="helvetica f4">programming langauges</h1>
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

            <!-- Ability with programming languages. -->
            <section>
              <h4>skill level</h4>
              <ol>
                <li>JavaScript</li>
                <li>Java</li>
                <li>C#</li>
                <li>C++</li>
                <li>Python</li>
                <li>Bash</li>
                <li>C</li>
              </ol>
            </section>

            <!-- Editors and IDEs. -->
            <section>
              <h4>editors</h4>
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
                <h4 id="crypto-header">cryptocurrency</h4>
                <span class="coin-price">
                  <img class="coin-img" src="/img/btc.png">
                  <!-- <span v-if="btc">${{btc.quotes.USD.price}}</span> -->
                  <!-- <span v-if="btc">${{btcPrice}}</span> -->
                  <span v-if="btc">${{roundedCoinPrice(btc.quotes.USD.price)}}</span>
                </span>
                <span class="coin-price">
                  <img class="coin-img" src="/img/xmr.png">
                  <span v-if="xmr">${{roundedCoinPrice(xmr.quotes.USD.price)}}</span>
                </span>
                <span class="coin-price">
                  <img class="coin-img" src="/img/req.png">
                  <span v-if="req">${{roundedCoinPrice(req.quotes.USD.price)}}</span>
                </span>
              </div>
              <p>
                As a college student, my options are somewhat limited in terms of financial investments. One investment
                that I believe in firmly is cryptocurrency. Which coin might you ask? Currently I'm holding
                <a href="https://bitcoin.org" target="_blank">BTC</a>,
                <a href="https://getmonero.org/" target="_blank">XMR</a>, and
                <a href="https://request.network/" target="_blank">REQ</a>.
                Bitcoin is the grand daddy, XMR has the most practical usage, and REQ takes
                an oracle-based approach that seeks to bridge the gap between existing monolithic financial systems and block chain technology.
              </p>

              <p>
                My general hypothesis on the long-term viability of cryptocurrencies is as follows:
              </p>
              <blockquote>
                In a world plagued by inflation caused largely in part by irresponsible and malicious
                central banking and bloated government beauracracies, crytpocurrencies flourish while fiat currencies flounder. I find the central component of
                bitcoin, the &apos;blockchain&apos;, to be a technological marvel. The blockchain acts as a decentralized and largely anonymous ledger that is used to verify
                the legitimacy of bitcoin transactions over computer networks.
              </blockquote>
              <p>
                If you want a quick overview on the basics of Bitcoin,
                <a href="http://thumbnails.visually.netdna-cdn.com/bitcoin-infographic_5029189c9cbaf.jpg" target="_blank">this</a>
                infographic is a good way to get started!
              </p>
            </section>
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
#left_column {
  max-width: 34em;
  margin: 0 auto 0 auto;
  padding: 1rem;
}

.content-sec {
  margin-bottom: 1em;
  border-bottom: 1px solid silver;
}

.content-sub {
  text-decoration: underline;
}

#crypto-header {
  display: inline-block;
  margin-right: 2em;
}

.coin-price {
  margin-right: 1em;
}

.coin-img {
  height: 1.5em;
  margin-right: 0.5em;
}
</style>
