import {jsonApiService} from "./jsonApiService";
import {urls} from "../urls/urls";

class PostService {
    getAll(){
        return jsonApiService.get(urls.json.posts)
    }
}

export const postService = new PostService();