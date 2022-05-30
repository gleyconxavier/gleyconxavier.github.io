import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import "./src/pages/global.css"
import {Helmet} from "react-helmet"
import Navbar from "./src/components/Navbar/Navbar";

import "./src/utils/formats"

const resolutionAlert =  () => {
  return alert(document.documentElement.clientWidth)
}

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  
  return (
    <div className={"shadow-container"}>
      <Helmet>
        <title>Gleycon Xavier - Software Developer"</title>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
      </Helmet>
      <Navbar />
        {element}
    </div>
  )
}
