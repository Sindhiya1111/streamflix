import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming axios is properly configured
import "./Row.css";

const baseUrl = "http://localhost:8080/browse/list";
const posterBaseUrl = "http://localhost:8080/browse/movie/poster?name=";
const videoBaseUrl = "http://localhost:8082/movie/video?name=";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data);
        console.log("Response from", fetchUrl, ":", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.slice(0, 9).map((movie) => (
          <a key={movie.id} href={`${videoBaseUrl}${movie.videoname}`}>
            <img
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${posterBaseUrl}${movie.imgpath}`}
              alt={movie.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Row;
