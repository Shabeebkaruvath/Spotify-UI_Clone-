import "./App.css";
import logo_img from "./logo.png";
import home from "./home.png";
import search from "./search.png";
import library from "./library.png";
import add from "./add.png";
import like from "./like.png";
import stay from "./img.jpg";
import user from "./user.png";
import next from "./next.png";
import prev from "./prev.png";
import play from "./play.png";
import shuffle from "./shuffle.png";
import repeat from "./repeat.png";

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
              <div>
                <button className="admin">
                  <img src={user} className="bimg" alt="ac" />
                  Admin
                </button>
              </div>
            </div>
            <div className="boxmain1">
              <div className="boxeach">
                <img src="https://c.saavncdn.com/038/Covers-Ac-sticos-Relajantes-xitos-Covers-Ac-sticos-Relajantes-Populares-English-2023-20221213140334-500x500.jpg" alt="song-img" className="box-img" />
                <p>Playlist1</p>
              </div>
              <div className="boxeach">
                <img src="https://m.media-amazon.com/images/I/41fuUx09N3L._SX450_.jpg" alt="song-img" className="box-img" />
                <p>Playlist2</p>
              </div>
              <div className="boxeach">
                <img src="https://upload.wikimedia.org/wikipedia/en/3/35/Shakira_-_Shakira_%282014%29.png" alt="song-img" className="box-img" />
                <p>Playlist3</p>
              </div>
            </div>
            <div className="boxmain2">
              <div className="boxeach">
                <img src="https://i.discogs.com/AI6bDff_xdrq34hPh4UR2S0ICS5aUEQj8r6uhqkGLY8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg5Mzg5/MjktMTUxNDM4NTQy/MS0xMjkwLmpwZWc.jpeg" alt="song-img" className="box-img" />
                <p>Playlist4</p>
              </div>
              <div className="boxeach">
                <img src="https://cdns-images.dzcdn.net/images/cover/600fb04ed3b2470bead98bbd11fbda13/264x264.jpg" alt="song-img" className="box-img" />
                <p>Playlist5</p>
              </div>
              <div className="boxeach">
                <img src="https://c.saavncdn.com/586/Acoustified-Hits-Vol-9-English-2016-500x500.jpg" alt="song-img" className="box-img" />
                <p>Playlist6</p>
              </div>
            </div>
          </div>
          <div className="two-2">
            <h2 className="for">Made for Admin</h2>
            <div className="potmain">
              <div className="pot">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtd5wthxkQXbK1dsyWvKa_lyRBoYz1hb3nA&usqp=CAU"
                  alt=""
                  className="pot-img"
                />
                <div className="mjmj">
                  <p>Daily Mix 1</p>
                  <p>Artist1,Artist2,Artist3 </p>
                </div>
              </div>
              <div className="pot">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdenez3Z3OfFyM00Kb44ICfqnxOcVkvYh9k1gb-LYX-piOA0vKFPrEqZNALd402hTxi8&usqp=CAU"
                  alt=""
                  className="pot-img"
                />
                <div className="mjmj">
                  <p>Daily Mix 2</p>
                  <p>Artist1,Artist2,Artist3 </p>
                </div>
              </div>
              <div className="pot">
                <img
                  src="https://static-cse.canva.com/blob/1052543/1600w-YmFtIRl8-qo.jpg"
                  alt=""
                  className="pot-img"
                />
                <div className="mjmj">
                  <p>Daily Mix 3</p>
                  <p>Artist1,Artist2,Artist3 </p>
                </div>
              </div>
              <div className="pot">
                <img
                  src="https://c.saavncdn.com/615/Welcome-To-My-Life-English-2017-500x500.jpg"
                  alt=""
                  className="pot-img"
                />
                <div className="mjmj">
                  <p>Daily Mix 4</p>
                  <p>Artist1,Artist2,Artist3 </p>
                </div>
              </div>
              <div className="pot">
                <img
                  src="https://cdns-images.dzcdn.net/images/cover/a3d7e373d2d52ee0da2700c9f0cd8083/500x500.jpg"
                  alt=""
                  className="pot-img"
                />
                <div className="mjmj">
                  <p>Daily Mix 5</p>
                  <p>Artist1,Artist2,Artist3 </p>
                </div>
              </div>{" "}
              <div className="pot">
                <img
                  src="https://static.stereogum.com/uploads/2018/10/DprBhEZVAAAn-Dh-1539880305.jpg"
                  alt=""
                  className="pot-img"
                />
                <div className="mjmj">
                  <p>Daily Mix 6</p>
                  <p>Artist1,Artist2,Artist3 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="control-bar">
         
        <div className="control-img">
          <img src={shuffle} alt="" />
          <img src={next} alt="" />
          <img src={play} alt="" />
          <img src={prev} alt="" />
          <img src={repeat} alt="" />

        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
