import axios from "axios";
import apiKey from "./config/api_key";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    // Authorization: "Client-ID H_vRmU096P-jS7BluBjg1y2AurdmZIIdEKalTNu4ths",
    Authorization: `Client-ID ${apiKey()}`,
  },
});
