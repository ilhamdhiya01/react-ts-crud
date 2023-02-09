import { UpdatePostReqBody } from '../../zustand';
import { api } from '../../constant/api';
export const showAllPost = () =>
  api
    .get('/posts')
    .then((res) => res.data)
    .catch((err) => console.log(err));

export const showDetailPost = (id: number) =>
  api
    .get(`/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

export const updatePost = (id: number, data: UpdatePostReqBody) =>
  api
    .put(`/posts/${id}`, data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
