import * as React from "react"

import logo from "./../../public/logo512.png"

const IndexPage = () => (
  <section className="flex bg-black-05 neumorphic-in tc mt6">
  
    <div className={"w-50 pa2"}>
      <img className={"w-10"} src={logo} />
      <h1 className="f1 fw2 pv1 mb0 lh-title">Gleycon <span className="black-50">Xavier</span></h1>
      <h2 className="fw1 f4 mt3 pv1 mb4">Software Developer</h2>
    </div>

    <div className={"w-50 justify-center items-center"}>
      <div className={"flex flex-column h-100 justify-center"}>
        <p>ANALYZE</p>
        <p>PLAN</p>
        <p>DEVELOP</p>
        <p>BUILD</p>
      </div>
    </div>
  </section>
)

export default IndexPage

