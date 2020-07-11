import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { graphql } from "gatsby"
import EduCard from "../components/educard"
import { Helmet } from "react-helmet"

function Education({ data }) {
  const eduList = data.allEducationYaml.edges

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Education | Kunjal</title>
      </Helmet>
      <div className="row">
        {eduList.map(({ node }) => {
          return (
            <EduCard
              eduName={node.name}
              eduDegree={node.degree}
              eduLink={node.link}
              eduImage={node.link}
              eduCourses={node.coursework}
              eduId={node.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Education

export const query = graphql`
  {
    allEducationYaml {
      edges {
        node {
          name
          degree
          link
          
          coursework
          id
        }
      }
    }
  }
`
