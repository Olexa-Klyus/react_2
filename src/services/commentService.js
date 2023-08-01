import {jsonApiService} from "./jsonApiService";
import {urls} from "../urls/urls";

class CommentService {
    getAll() {
        return jsonApiService.get(urls.json.comments)
    }
}
export const commentService = new CommentService();