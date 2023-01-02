import Section from '../components/Section'

const SubHeader = ({ text }: { text: string }) => <h1 className="text-xl mb-2 text-gray-700">{text}</h1>

const Tech = () => (
  <Section header='Thoughts on Tech'>
    <>
      {/* Thoughts on JavaScript */}
      <section>
        <SubHeader text='JavaScript' />
        <p>
          When Brendan Eich invented Javascript back during the days of Netscape, everything changed.
          JavaScript is objectively the greatest programming language ever created.
        </p>
        <br />
        <p>
          It combines the swiftness of untyped languages with functional programming features and an inheritance model
          that is so simple your grandmother could learn it. You can run it in the browser, as a web server, or as
          a desktop application that uses hardly any memory at all.
        </p>
        <br />
        <p>
          Here's the best part there exists an online package registry containing
          literally thousands of libraries that do anything you could ever possibly imagine. Every one of these packages
          has been vetted by elite programmers from MIT and Stanford so you can't go wrong adding dependencies
          willy-nilly. Have fun! 🤡
        </p>
      </section>

      <section className='my-4'>
        <SubHeader text='cryptocurrency' />
        <p>
          People tend to ask programmers what they think about cryptocurrency, as if the two are related.
          I beg to differ. While I have strong feelings about

        </p>
        {/* .coin-img {
  height: 1.5em;
  margin-right: 0.5em;
  vertical-align: middle;
} */}

        {/* Bitcoin proselytizing */}
        <div className="my-4">
          <img className="inline h-5 mr-1" src="/img/btc.png" />
          <span>
            I believe in Bitcoin because I don't believe in the financial system of the Western world.
            The release of Bitcoin marks an epoch in time that I believe will cause
            substantial ripples in the global economy within the foreseeable future. HODL.
          </span>
        </div>

        {/* Monero shilling. */}
        <div className="my-4">
          <img className="inline h-5 mr-1" src="/img/xmr.png" />
          <span>
            Monero offers key privacy enhancments over Bitcoin and benefits from a solid network effect
            due to its prolific usage in dark web markets. XMR has adopted a more reckless strategy for technological
            iteration in order to more quickly achieve what its community deems necessary for a privacy coin.
          </span>
        </div>

        <SubHeader text='Bitcoin Thesis' />
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
    </>
  </Section>
)

export default Tech