const Skillset = () => (
  <section className="content-sec">
    <h1 className="f1 lh-solid mt0 helvetica">Skillset</h1>
    <p>
      I have years of experience developing in macOS, GNU/Linux, and Windows operating systems, with
      a preference for working in *nix OSes.
    </p>
    <p>
      Below is a non-exhaustive list of fluent and familiar programming languages that I have used in academic or
      professional settings. 
    </p>
    <div className="flex">
      <div className="w-50">
	   <h3>Fluent</h3>
        <ul className="list-square">
          <li>JavaScript</li>
          <li>Golang</li>
          <li>Bash</li>
        </ul>
      </div>
      <div className="w-10">
	   <h3>Familiar/Rusty</h3>
        <ul className="list-square">
          <li>Java</li>
          <li>Python</li>
          <li>C++</li>
        </ul>
      </div>
    </div>
  </section>
)

export default Skillset