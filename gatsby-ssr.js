import React from 'react'

const HeadComponents = [
  <link
    rel="preload"
    href="https://code.jquery.com/jquery-3.6.0.min.js"
    as="script"
  ></link>,
]

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}

export { onRenderBody }
