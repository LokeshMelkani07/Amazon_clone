import axios from "axios";

const instance = axios.create({
  // axios is used to get or post request its better than fetchAPI
  baseURL: "http://localhost:5001/clone-f3161/us-central1/api", // The API (cloud function) URL
});

export default instance;
