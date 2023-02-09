export interface PostResBody {
  id: number;
  title: string;
  body: string;
  userId: number;
  popup: booldean;
}
export interface DetailPostResBody {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export interface UpdatePostReqBody {
  title: string;
  body: string;
}
export interface PostState {
  posts: PostResBody[];
  post: DetailPostResBody;
  setPopup: boolean;
}
export interface PostAction {
  setPosts: () => void;
  handlePopup: (id: number) => void;
  showDetailPost: (id: number) => void;
  updatePost: (id: number, data: UpdatePostReqBody) => void;
  setPost: (data: DetailPostResBody) => void;
}
export interface PostStore extends PostState, PostAction {}
