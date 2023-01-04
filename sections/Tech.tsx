import Image from 'next/image'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'
import SubHeader from '../components/SubHeader'
import btc from '../public/img/btc.png'
import xmr from '../public/img/xmr.png'

const Tech = () => (
  <Section header='Thoughts on Tech'>
    <>
      {/* Thoughts on JavaScript */}
      <section>
        <SubHeader text='JavaScript' />
        <Paragraph>
          Brendan Eich's JavaScript is fast, scriptable, Java-like language in the browser. And it changed everything.
          JavaScript is objectively the greatest programming language ever created.
        </Paragraph>
        <Paragraph>
          It combines the swiftness of untyped languages with functional programming features and an inheritance model
          that is so simple your grandmother could learn it. You can run it in the browser, as a web server, or as
          a desktop application that uses hardly any memory at all.
        </Paragraph>
        <Paragraph>
          The best part? There exists an online package registry containing
          thousands of libraries that do anything you could ever possibly dream up or prompt GPT3 for. Every one of these packages
          has been vetted by elite programmers from MIT and Stanford so you can't go wrong adding dependencies willy-nilly. Have fun! 🤡
        </Paragraph>
      </section>

      <section className='my-4'>
        <SubHeader text='cryptocurrency' />
        <Paragraph>
          People often look to programmers for their thoughts on "crypto" as if the two are related.
          I beg to differ. The average programmer is no less equipped to understand the importance of "crypto"
          than is the average grocery bagger, airplane pilot, or government bureaucrat.
        </Paragraph>
        <Paragraph>
          That is to say all of
          them are equally capable of understanding its importance. Just as all of them are equally capable
          of understanding basic finance, economics, and most importantly, how money works in modern society.
        </Paragraph>
        <Paragraph>
          <span className='font-bold'>TL;DR</span>  big banking, federal reserve, market cycles, inflationary fiat currencies, and quantitative easing = bad.
          Hard money = good. Bitcoin is the hardest form of currency known to man. Ergo Bitcoin should be adopted as the global currency.
        </Paragraph>

        {/* Bitcoin proselytizing */}
        <div className="my-4">
          <div className="flex gap-2 items-center">
            <Image src={btc} alt='' />
            <span className='text-gray-800'>Bitcoin</span>
          </div>
          <span>
            I believe in Bitcoin because I don't believe in the financial system of the Western world.
            The release of Bitcoin marks an epoch in time that I believe will cause
            substantial ripples in the global economy within the foreseeable future. HODL.
          </span>
        </div>

        {/* Monero shilling. */}
        <div className="my-4">
          <div className="flex gap-2 items-center">
            <Image src={xmr} alt='' />
            <span className='text-gray-800'>Monero</span>
          </div>
          <span>
            Monero offers key privacy enhancements over Bitcoin and benefits from a solid network effect
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