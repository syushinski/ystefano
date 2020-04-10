import { Link } from "gatsby"
import React from "react"



const linkStyles = {
    color: `black`,
    textDecoration: `none`,
    fontFamily:`sans-serif`,
    hover: `#729D39`,
    fontWeight: 100
};

const activeStyles = {
    fontWeight: `bold`,
}

const NavBar = ({items}) => (
    <div style={{width:`17%`, float: `left`, height: `100%`, top: 0}}>
        <nav>
            <div style={{margin: `0px auto`, width: `100%`}}>
                <ul style={{ listStyle: `none`, display: `flex`, flexDirection: "column"}}>
                    {items.map(item => (
                        <li>
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
        </nav>
    </div>
)


NavBar.defaultProps = {
    items: [
      {
        title: "About me",
        slug: ""
      },
      {
        title: "Projects",
        slug: "projects"
      },
      {
          title: "Blog",
          slug: "blog"
      },
      {
          title: "Photos",
          slug: "photos"
      }
    ]
  }

  export default NavBar