import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} isLargeRow />
    </div>
  );
}

export default App;
