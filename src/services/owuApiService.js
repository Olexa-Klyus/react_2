import axios from "axios";
import {owuBaseUrl} from "../urls/urls";

export const owuApiService =  axios.create({baseURL:owuBaseUrl});