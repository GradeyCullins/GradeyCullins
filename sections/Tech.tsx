const Tech = () => (
  <div className='content-sec'>
    <h1 className="f1 lh-solid mt0 helvetica dn dib-ns">Thoughts on Technology</h1>
    <h1 className="f1 lh-solid mt0 helvetica dn-m dn-l">Thoughts on Tech</h1>

    {/* Thoughts on JavaScript */}
    <section>
      <h1 className="helvetica f4">JavaScript</h1>
      <p>
        When Brendan Eich invented Javascript back during the days of Netscape, everything changed.
        JavaScript is objectively the greatest programming language ever created.
      </p>

      <p>
        It combines the swiftness of untyped languages with functional programming features and an inheritance model
        that is so simple your grandmother could learn it. You can run it in the browser, as a web server, or as
        a desktop application that uses hardly any memory at all.
      </p>
      <p>
        And the best of all is, there exists an online package registry containing
        literally thousands of libraries that do anything you could ever possibly imagine. Every one of these packages
        has been vetted by elite programmers from MIT and Stanford so you can't go wrong adding dependencies
        willy-nilly. Have fun! 🤡
      </p>
    </section>

    <section className="mv4">
      <h1 className="helvetica f4">cryptocurrency</h1>
      <p>
        As a <span style={{ textDecorationLine: 'line-through' }}>college student</span> working stiff paying back student loans, I don't have the ability to make
        a lot of investments. One kind of investment that I make an exception for is <a href="https://splinternews.com/hey-idiots-youre-gonna-lose-all-your-money-on-bitcoin-1820805131" target="_blank">fake internet money</a> otherwise known as cryptocurrency.
      </p>

      {/* Bitcoin proselytizing */}
      <div className="mv4">
        <img className="coin-img di" src="/img/btc.png" />
        <p className="di">
          I believe in Bitcoin because I don't believe in the financial system of the Western world.
          The release of Bitcoin marks an epoch in time that I believe will cause
          substantial ripples in the global economy within the foreseeable future. HODL.
        </p>
      </div>

      {/* Monero shilling. */}
      <div className="mv4">
        <img className="coin-img di" src="/img/xmr.png" />
        <p className="di">
          Monero offers key privacy enhancments over Bitcoin and benefits from a solid network effect
          due to its prolific usage in dark web markets. XMR has adopted a more reckless strategy for technological
          iteration in order to more quickly achieve what its community deems necessary for a privacy coin.
        </p>
      </div>

      <p>
        My opinion on the long-term viability of Bitcoin is as follows:
      </p>
      <blockquote>
        In a world plagued by inflation largely caused by irresponsible and malicious
        central banking and bloated government beauracracies,
        crytpocurrencies flourish while fiat currencies flounder. Backed by
        decentralized strength via blockchain, the economic robustness granted
        through a finite total possible supply of coin, and transparency through
        open source development, Bitcoin stands to disrupt global finance on a long
        enough timeline. Short the bankers, long BTC.
      </blockquote>
    </section>
  </div>
)

export default Tech