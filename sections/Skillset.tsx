const Skillset = () => (
  <section className="content-sec">
    <h1 className="f1 lh-solid mt0 helvetica">Skillset</h1>
    <p>
      I have years of experience developing in macOS, GNU/Linux, and Windows operating systems, with
      a preference for working in *nix OSes.
    </p>
    <p>
      School taught me early on that in order to work in this industry, one must never stop learning.
      With this principle in mind, I take an active interest in improving skills corolary to programming in order to bolster my technical arsenal.
    </p>
    <ul className="sq-li">
      <li className="mb2">
       <b>devops</b> - containerization, deployment strategies and CICD pipelines
      </li>
      <li className="mb2">
        <b>testing</b> - unit, regression, integration, e2e testing and performance metrics
      </li>
      <li className="mb2">
        <b>security</b> - functional understanding of cryptographically secured protocols, auth flows, and
        other server and client-side security considerations
      </li>
    </ul>
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