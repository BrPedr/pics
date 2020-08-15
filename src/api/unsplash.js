import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Br9DLxHi44gAttsTqCRkLz3p_oYsbkNbNU7fZvN8NSc",
  },
});
