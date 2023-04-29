import "./App.css";
import logo_img from "./logo.png";
import home from "./home.png";
import search from "./search.png";
import library from "./library.png";
import add from "./add.png";
import like from "./like.png";
import stay from "./img.jpg";
import user from "./user.png";
function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="one">
          <div className="nav">
            <div className="logo">
              <img src={logo_img} alt="logo-img" />
              <h2>Spotify</h2>
            </div>
            <h3>
              <img src={home} alt="home-img" className="oimg" />
              Home
            </h3>
            <h3>
              <img src={search} alt="home-img" className="oimg" />
              Search
            </h3>
            <h3>
              <img src={library} alt="home-img" className="oimg" />
              Your Library
            </h3>
            <div className="ro">
              <div>
                <h3>
                  <img src={add} alt="home-img" className="oimg" />
                  Create Playlist
                </h3>
              </div>
              <div>
                <h3>
                  <img src={like} alt="home-img" className="oimg" />
                  Liked Songs
                </h3>
              </div>
              <hr className="hr" />
              <div className="to">
                <h3>My Playlist #1</h3>
                <h3>My Playlist #2</h3>
              </div>
            </div>
            <div>
              <img src={stay} alt="song-img" className="song-img" />
            </div>
          </div>
        </div>
        <div className="two">
          <div className="two-one">
            <div className="two-one1">
              <h1>Good Evening</h1>
              <button className="admin"><img src={user} className="bimg"/>Admin</button>
            </div>
          </div>
        </div>
      </div>
      <div className="control-bar">
        <h4>play</h4>
      </div>
    </div>
  );
}

export default App;
