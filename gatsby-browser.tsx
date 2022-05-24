import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import "./src/pages/global.css"
import {Helmet} from "react-helmet"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <>
      <Helmet>
        <title>Gleycon Xavier - Software Developer"</title>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
      </Helmet>
        {element}
    </>
  )
}
