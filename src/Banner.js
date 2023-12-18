import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div
        className="banner-content"
        style={{
          paddingTop: "200px",
          paddingLeft: "20px",
        }}
      >
        {/*title*/}
        <h1 className="banner_title">STREAMFLIX</h1>

        {/*2 buttons*/}
        <div className="banner_buttons">
          <button className="banner_button">COEN 6861 - Team STREAMFLIX</button>
          <button className="banner_button">
            Enjoy the Latest Trending Videos Now
          </button>
        </div>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
