import axios from "axios";

import {jsonBaseUrl} from "../urls/urls";

export const jsonApiService =  axios.create({baseURL:jsonBaseUrl})