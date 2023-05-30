import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5ecb8b1112724b4489721c39d6f1ad13"
  }
})