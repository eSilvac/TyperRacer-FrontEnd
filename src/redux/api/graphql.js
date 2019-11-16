import axios from "axios";

const GraphqlApi = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default GraphqlApi;
