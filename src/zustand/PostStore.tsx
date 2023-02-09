import { stat } from 'fs';
import { create } from 'zustand';
import { PostStore, PostResBody, DetailPostResBody, UpdatePostReqBody } from '.';
import { PostState } from '.';
import { showAllPost, showDetailPost, updatePost } from '../Pages/api';

const initialState: PostState = {
  posts: [],
  post: {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  },
  setPopup: false,
};
export const usePost = create<PostStore>((set, get) => ({
  ...initialState,
  setPosts: async () => {
    const result: PostResBody[] = await showAllPost();
    set((state) => ({ posts: result }));
  },
  handlePopup: (id) =>
    set((state) => {
      return {
        posts: state.posts.map((item) => {
          if (id === item.id) {
            // set((state) => ({ setPopup: !state.setPopup }));
            return { ...item, popup: true };
          } else {
            // set((state) => ({ setPopup: !state.setPopup }));
            return { ...item, popup: false };
          }
        }),
        setPopup: !state.setPopup,
      };
    }),
  showDetailPost: async (id) => {
    const result: DetailPostResBody = await showDetailPost(id);
    set((state) => ({ post: result }));
  },
  updatePost: async (id, data) => {
    const result: DetailPostResBody = await updatePost(id, data);
    console.log(result);
  },
  setPost: (data) => {
    set((state) => ({ post: data }));
  },
}));
