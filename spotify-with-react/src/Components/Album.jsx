import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
const Album = ({ location, history, match }) => {
  console.log("location", match.params.id);

  const [album, setAlbum] = useState({});
  const fetch = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${match.params.id}`
      );
      if (response.ok) {
        let album = await response.json();
        console.log("Album result", album);
        setAlbum(album);
      } else {
        console.log("something went wrong with the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <section id="cover-album" className="px-3 px-lg-5">
        <div id="album-cover-img"></div>
        <div className="cover-content">
          <div className="cover-album-text ml-4">Album</div>
          <h2 className="ml-4 my-2"></h2>
          <div className="cover-content-footer ml-4">
            <span>Ed SHeeran</span> - 2017 - 16 songs, 59 min 33 sec
          </div>
        </div>
      </section>
      <section id="album-list" className="px-3 px-lg-5">
        <div className="btn-section">
          <div className="circle-btn">
            <a href="#">
              <i className="bi bi-play-circle-fill"></i>
            </a>
          </div>
          <div className="heart-icon mt-3">
            <i className="bi bi-heart"></i>
          </div>
          <div className="mt-3">
            <a href="#">
              <i className="bi bi-three-dots"></i>
            </a>
          </div>
        </div>
        <ul id="albums">
          <div className="list-nav">
            <h5 id="album-title" className="mt-5">
              # Title
            </h5>
            <hr className="bg-light" />
          </div>
        </ul>
        <div id="copyright" className="my-5">
          <p>
            &copy; 2017 Asylum Records UK, a division of Atlantic Records UK, a
            Warner Music Group company
          </p>
        </div>
      </section>
    </>
  );
};

export default withRouter(Album);
