import React, { useState } from "react";
import axios from "axios"; // Import axios

function UserForm() {
  const [name, setName] = useState("");
  const [mood, setMood] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("https://interface-for-sound-api.vercel.app/", { name, mood }) // Update the URL and data object as necessary
      .then((response) => {
        // Handle the response from the server here
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <div onChange={(e) => setMood(e.target.value)}>
          <input type="radio" value="Happy" name="mood" /> Happy
          <input type="radio" value="Stressed" name="mood" /> Stressed
          <input type="radio" value="Calm" name="mood" /> Calm
          <input type="radio" value="Sad" name="mood" /> Sad
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
