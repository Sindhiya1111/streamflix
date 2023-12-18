import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming axios is properly configured
import "./Row.css";

const baseUrl = "http://localhost:8080/browse/list";
const posterBaseUrl = "http://localhost:8080/browse/movie/poster?name=";
const videoBaseUrl = "http://localhost:8082/movie/video?name=";
var videores = "";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [videores, setVideores] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data);
        console.log("Response from", fetchUrl, ":", response.data);

        // Fetch videores for each movie
        const videoResponses = await Promise.all(
          response.data.map(async (movie) => {
            const videoResponse = await axios.get(
              `${videoBaseUrl}${movie.videoname}`
            );
            return videoResponse.data; // Adjust this line based on your video response structure
          })
        );

        setVideores(videoResponses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movieIndex) => {
    const movie = movies[movieIndex];
    console.log(movie.title);
    // Use videores[movieIndex] as needed
    // Handle click logic (if needed)
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.slice(0, 9).map((movie, index) => (
          <a key={movie.id} href={`${videores[index]}`}>
            <img
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${posterBaseUrl}${movie.imgpath}`}
              alt={movie.title}
              onClick={() => handleClick(index)}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Row;
