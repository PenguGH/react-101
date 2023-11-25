import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../navbar-styles.css";

const ApiExercise = () => {
  const [numOfImages, setNumOfImages] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchRandomNASASpaceImages = async () => {
      try {
        // Fetch data from the NASA IMAGES API
        const response = await fetch(
          "https://images-api.nasa.gov/search?q=space&media_type=image&page=1"
        );
        const data = await response.json();
        console.log("data", data);

        // Check to see if there are any items in the response.json
        if (data.collection.items.length > 0) {
          // Get random space images from the response.json based on the number of images requested by the user's input
          const randomSpaceImages = [];
          for (let i = 0; i < numOfImages; i++) {
            const randomIndex = Math.floor(
              Math.random() * data.collection.items.length
            );
            const randomSpaceImage = data.collection.items[randomIndex];

            // Getting metadata specific to the random space image
            const imageUrl = randomSpaceImage.links[0].href;
            const title =
              randomSpaceImage.data[0]?.title || "No title available";
            const date_created =
              randomSpaceImage.data[0]?.date_created ||
              "No date_created available";
            const description =
              randomSpaceImage.data[0]?.description ||
              "No description available";

            // Adding the random space image to the random space images array along with its metadata
            randomSpaceImages.push({
              imageUrl,
              title,
              date_created,
              description,
            });
          }

          // Updating the state with the random space images
          setImages(randomSpaceImages);
        } else {
          console.error("No images found in the response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Calling the fetchRandomNASASpaceImages function with the number of images as the input
    fetchRandomNASASpaceImages();
  }, [numOfImages]);

  // helper function using event as paramater for when the form input is changed. Converts the input into a number and updates the setNumOfImages useState hook.
  const handleOnNumOfImagesChange = (event) => {
    setNumOfImages(Number(event.target.value));
  };

  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <h1>Random NASA Space Images Generator</h1>
      <p>
        This is an exercise on API consumption using the free NASA Image and
        Video Library API. To display cool space related images and metadata for
        those images.{" "}
      </p>
      <form>
        <label>
          Please enter the number of images you want to see: (The default is 1.
          And the maximum is 100.)
          <br></br>
          <input
            type="number"
            value={numOfImages}
            onChange={handleOnNumOfImagesChange}
            min="1"
            max="100"
          />
        </label>
      </form>
      <br></br>
      {images.map((image, index) => (
        <div key={index} className="spaceImageCard">
          {/* Returning the random space image(s) with its metadata */}
          <img src={image.imageUrl} alt={image.description} />
          <p>Title: {image.title}</p>
          <p>Date Created: {image.date_created}</p>
          <p>Description: {image.description}</p>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default ApiExercise;