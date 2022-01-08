import axios from "axios";
import apiKey from "./config/api_key";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${apiKey()}`,
  },
});
