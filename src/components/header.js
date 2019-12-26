import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyles = {
    color: `white`,
    textDecoration: `none`,
    padding: 10,
    fontFamily:`sans-serif`
};

const activeStyles = {
    background: `white`,
    color: `#729D39`,
    padding: '38px 10px 38px 10px',
}

const Header = ({ siteTitle, items }) => (
  <header
    style={{
      background: `#729D39`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h1 style={{ margin:0, padding: 0, maxWidth: 400 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      
      <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
        {items.map(item => (
          <li style={{margin: `0`, maxHeight: 100}}>
          <Link
            to={`/${item.slug}`}
            style={linkStyles}
            activeStyle={activeStyles}
          >
            {item.title}
          </Link>
        </li>
        ))}
      </ul>
      
        
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  items: [
    {
      title: "About me",
      slug: ""
    },
    {
      title: "Projects",
      slug: "projects"
    }
  ]
}

export default Header
