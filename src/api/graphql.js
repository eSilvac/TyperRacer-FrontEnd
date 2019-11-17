import axios from "axios";
import queries from './queries';

export const GraphqlQueries = queries;

export const GraphqlApi = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

