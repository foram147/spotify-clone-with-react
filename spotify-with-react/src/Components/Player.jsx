import {
  BiHeart,
  BiShuffle,
  BiFullscreen,
  BiPlayCircle,
  BiSkipPrevious,
  BiMinusCircle,
  BiMusic,
} from "react-icons/bi";
import {
  BsArrowRepeat,
  BsFillSkipEndFill,
  BsMusicNoteList,
  BsSkipStartFill,
  BsSpeaker,
  BsVolumeUp,
} from "react-icons/bs";
const Player = () => {
  return (
    <div className="container-fluid fixed-bottom player-bar d-flex align-items-center">
      <div className="col-4">
        <div className="d-none d-xl-inline-block">
          <img src="https://img.discogs.com/WrTR1R6c7XmyRPT2kfA5402lHZw=/fit-in/600x604/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13961386-1565505678-5050.jpeg.jpg" />
        </div>
        <div
          className="d-inline-block text-truncate align-middle px-2"
          style={{ maxWidth: "60%" }}
        >
          <p className="title">
            <a href="#">Another One Bites The Dust - Remastered 2011</a>
          </p>
          <p className="artist">
            <a href="#">Queen</a>
          </p>
        </div>
        <div className="d-none d-md-inline-block px-2">
          <BiHeart />
        </div>
        <div className="d-none d-md-inline-block px-1">
          <BiFullscreen />
        </div>
      </div>

      <div className="col-4 text-center">
        <div className="pb-1">
          <div className="d-none d-xl-inline-block">
            <BiShuffle />
          </div>
          <div className="d-inline-block">
            <BsSkipStartFill />
          </div>
          <div className="d-inline-block">
            <BiPlayCircle className="play" />
          </div>
          <div className="d-inline-block">
            <BsFillSkipEndFill />
          </div>
          <div className="d-none d-xl-inline-block">
            <BsArrowRepeat />
          </div>
        </div>
        <div className="progress-time">
          <div className="d-inline-block ml-n5">0:00</div>
          <div className="d-inline-block progress-bar mx-2"></div>
          <div className="d-inline-block mr-n5">3:29</div>
        </div>
      </div>

      <div className="col-4 text-right">
        <div className="d-inline-block">
          <i className="bi bi-music-note-list"></i>
          <BsMusicNoteList className="music" />
        </div>
        <div className="d-inline-block">
          <i className="bi bi-speaker px-3"></i> <BsSpeaker />
        </div>
        <div className="d-inline-block">
          <BsVolumeUp />
        </div>
        <div className="d-inline-block volume-bar"></div>
      </div>
    </div>
  );
};

export default Player;
