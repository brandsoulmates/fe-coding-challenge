import * as React from "react"
import './style.css';
import img from '../images/avatar.jpg';

const Home = () => {
  return (
      <main>
        <div className="card">
          <div className="flex">
            <div className="left">
              <div className="card-img" style={{margin: 'auto'}}>
                <img src={img} />
              </div>
              <div className="card-content">
                <h3 style={{ marginBottom: '-14px'}}>Firstname Lastname</h3>
                <p>github_username</p>
                <p>Los Angeles, CA</p>
                <a href="/profile">www.example.com</a>
              </div>
            </div>  
            <div className="right">
              <div className="flex" style={{justifyContent: 'space-between'}}>
                <div>
                  <h1 className="followersContent">6</h1>
                  <h3>Public Repos</h3>
                </div>
                <div>
                  <h1 className="followersContent">13</h1>
                  <h3>Public Repos</h3>
                </div>
                <div>
                  <h1 className="followersContent">11</h1>
                  <h3>followers </h3>
                </div>
                <div>
                  <h1 className="followersContent">48</h1>
                  <h3>Following</h3>
                </div>
              </div> 
              <p><strong>BioGgraphy :</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                 and scrambled it to make a type specimen book. It has survived not only five centuries,</p> 
              <p><strong>Compnay :</strong> Acme Devlopement</p>
              <p><strong>Twitter :</strong>@firstname</p>
            </div>
          </div>
      </div>
      </main>
  );
}

export default Home