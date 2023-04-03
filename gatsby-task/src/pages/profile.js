import * as React from "react"
import { Link } from "gatsby";

const Home = ({ location }) => {
  const { state = {} } = location
  const { name } = state
  console.log(name)

  return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                  <div className="image">Image</div>
                  <div>Firstname</div>
                  <div className="mb-4">username</div>
                  <div>Los Angelos</div>
                  <Link to="/">ww.iasdi.com</Link>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                      <h2>6</h2>
                      <p>Private Repos</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                      <h2>16</h2>
                      <p>Public Repos</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                      <h2>61</h2>
                      <p>Followers</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                      <h2>68</h2>
                      <p>Following</p>
                    </div>
                    <div className="col-12 d-flex flex-column ">
                      <div className="bio mb-2">
                        <b>Biography:</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptatum ea aspernatur quaerat neque libero ut repudiandae quod cupiditate, sequi, illum, consectetur nam inventore! Inventore quis animi officiis. Nemo, ea.
                      </div>
                      <div className="company mb-2"><b>Company:</b> suiahdauidh</div>
                      <div className="tweet mb-2"><b>Twitter:</b> suiahdauidh</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Home