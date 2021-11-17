import React from "react";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  return to? internal? (
    <GatsbyLink
      to={to}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      {...other}
    >
      {children}
    </GatsbyLink>
  ):(
    <a href={to} {...other}>
      {children}
    </a>
  ):(
    <>
      {children}
    </>
  )
}
export default Link