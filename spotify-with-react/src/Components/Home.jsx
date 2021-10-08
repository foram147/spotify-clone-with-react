import Playlist from "./Playlist";

const Home = () => {
  return (
    <>
      <Playlist search={"love"} title={"Albums"} />
      <Playlist search={"john"} title={"Artists"} />
      <Playlist search={"ed"} title={"Favorites"} />
    </>
  );
};

export default Home;
