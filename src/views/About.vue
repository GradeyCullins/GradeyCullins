<template>
  <div id="left_column">
      <div id="about">
        <!-- bio -->
        <article id="bio">
          <section class="content-sec">
           <h2 class="content-sub">introduction</h2>
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
            <h2 class="content-sub">technology</h2>
            <!-- Thoughts on JavaScript. -->
            <section>
              <h4>programming languages</h4>
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
              <h4>cryptocurrency</h4>
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

<style scoped>
.content-sec {
  margin-bottom: 3em;
}

.content-sub {
  text-decoration: underline;
}
</style>
