import Image from 'next/image'

const Closing = () => (
  <section>
    <h1 className="f1 lh-solid mt0 helvetica">Closing</h1>
    <p>
      My hope is that this site gives readers a little insight into my thoughts and experiences as a software
      developer. Thanks for stopping by.
    </p>
    <figure className="mh0">
      <Image
        src='/img/gc-bike-mtns.png'
        alt='idk'
        width='600'
        height='500'
      />
      <figcaption className="ma0 pa0 helvetica f7 fw3 i">Grand Targhee, WY (Summer 2019)</figcaption>
    </figure>
  </section>
)

export default Closing