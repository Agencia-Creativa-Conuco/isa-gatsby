import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Section, Container, Row, Col } from "../components/layout/index"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <Section>
          <Container>
            <Row>
              <Col>
                <title>Not found</title>
                <h1 style={headingStyles}>Página no encontrada</h1>
                <p style={paragraphStyles}>
                  Lo sentimos{" "}
                  <span role="img" aria-label="Pensive emoji">
                    😔
                  </span>{" "}
                  No pudimos encontrar lo que estabas buscando.
                  <br />
                  {process.env.NODE_ENV === "development" ? (
                    <>
                      <br />
                        Intenta crear una página en <code style={codeStyles}>src/pages/</code>.
                      <br />
                    </>
                  ) : null}
                  <br />
                  <Link to="/">Ir a la página de inicio</Link>.
                </p>
              </Col>
            </Row>
          </Container>
        </Section>
      </main>
    </Layout>
  )
}

export default NotFoundPage
