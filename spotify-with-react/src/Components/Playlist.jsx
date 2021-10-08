import React, { Component } from "react";
import Carousel from "react-bootstrap/carousel";
import Song from "./Song";
import { Alert, Container, Spinner } from "react-bootstrap";
class Playlist extends Component {
  breakPoints = [
    { width: 500, itemsToShow: 2 },
    { width: 700, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
    { width: 1500, itemsToShow: 6 },
  ];
  state = {
    // initial value?
    playlists: [],
    isLoading: true,
    isError: false,
  };

  fetch = async () => {
    console.log("I'm componentDidMount");
    // here things happen AFTER the initial render
    // this is the PERFECT PLACE for a get request
    // because the user is already watching your "static" part of the jsx
    // now we're going to perform here the fetch (a get request)
    // it's somewhat like window.onload()

    // componentDidMount will always happen JUST ONCE!!!
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.props.search}`
      );
      // console.log(response)

      if (response.ok) {
        let playlistsResult = await response.json();
        console.log("result", playlistsResult.data);
        this.setState({
          isLoading: false,
          playlists: playlistsResult.data,
          // this is equal to reservations: reservations
        });
      } else {
        console.log("something went wrong with the server");
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };
  componentDidMount = async () => {
    this.fetch();
  };

  render() {
    const songTitle = this.props.title.toLowerCase();
    return (
      <Container fluid id="playlist-container">
        {this.state.isLoading && ( // this is called the SHORT-CIRCUIT operator
          <Spinner animation="border" variant="success" className="mx-auto" />
        )}
        {this.state.isError && (
          <Alert variant="danger">An error occurred!</Alert>
        )}
        {this.state.playlists.length === 0 && !this.state.isLoading}
        <h3 className="ml-4 text-left py-5" style={{ color: "white" }}>
          {this.props.title}
        </h3>
        <Carousel breakPoints={this.breakPoints}>
          {this.state.playlists.map((playlist) => {
            return (
              playlist.title.cover !== "" &&
              (songTitle === "albums" ? (
                <Song playlist={playlist} img={playlist.album.cover} />
              ) : (
                <Song playlist={playlist} img={playlist.artist.picture} />
              ))
            );
          })}
        </Carousel>
      </Container>
    );
  }
}

export default Playlist;
