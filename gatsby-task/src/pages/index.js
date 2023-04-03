import * as React from "react"
import { Link } from "gatsby"
import { Button, Card } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/style.css"

const IndexPage = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.github.com/users`,
    })
      .then((response) => {
        response.data.forEach((value, index) => {
          axios({
            method: "GET",
            url: `https://api.github.com/users/${value.login}`,
          })
            .then((response) => {
              setData((data) => [...data, response.data])
            })
            .catch((error) => console.log(error))
        })
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className="homepage p-4">
      <div className="container">
        <div className="row display-data">
          {data &&
            data.map((value, index) => {
              return (
                <div className="col-3 p-4">
                  <Card className="card-parent">
                    <Card.Body className="card-body">
                      <StaticImage 
                        src="../images/profile_image.jpg" 
                        alt="Profile Image" 
                        placeholder="blurred" 
                        layout="constrained" 
                        className="card-image" 
                        height={220} 
                      />
                      <Card.Title className="text-center">{value.name}</Card.Title>
                      <Card.Text className="text-center">{value.login}</Card.Text>
                      <Button className="view-profile-btn" variant="primary">
                        <Link 
                          className="profile-link" 
                          to="/profile/"
                          state={{ 
                            name: value.name, username: value.login, bio: value.bio, company: value.company, location: value.location,
                            followers: value.followers, following: value.following, twitter: value.twitter_username,
                            repos: value.public_repos, gists: value.public_gists, blog: value.blog
                          }}
                        >
                          View Profile
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Github User Viewer - Coding Challenge</title>
