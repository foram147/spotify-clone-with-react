import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";

const Song = (props) => {
  return (
    <div className="card h-100">
      <div className="card-image">
        <a href="#">
          <span className="badge hidden-icons">
            <i className="bi bi-play-circle-fill"></i>
          </span>
          <Link to={"/album/" + props.playlist.id}>
            <img className="card-img-top" src={props.img} alt="moviecard" />
          </Link>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {props.playlist.album.title.substring(0, 20)}
        </h5>
        <p className="card-text" style={{ fontSize: 10 }}>
          <small className="text-muted">
            {props.playlist.type} - {props.playlist.id}
          </small>
        </p>
      </div>
    </div>
  );
};

export default Song;
