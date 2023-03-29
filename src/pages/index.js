import * as React from "react"
import './style.css';
import img from '../images/avatar.jpg';

const IndexPage = () => {

  function Card(props) {
    return (
      <div className="card">
        <div className="card-img">
          <img src={img} alt={props.alt} />
        </div>
        <div className="card-content">
          <h3 style={{ marginBottom: '-14px'}}>Firstname Lastname</h3>
          <p>github_username</p>
          <a href="/profile">
            <button className="btn"><a>View Profile</a></button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <main>
    <div className="container">
      <Card title="Card 1" description="This is the first card." />
      <Card title="Card 2" description="This is the second card." />
      <Card title="Card 3" description="This is the third card." />
      <Card title="Card 1" description="This is the first card." />
      <Card title="Card 2" description="This is the second card." />
      <Card title="Card 3" description="This is the third card." />
    </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Github User Viewer - Coding Challenge</title>
