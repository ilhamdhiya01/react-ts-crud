import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { usePost } from '../zustand/PostStore';
import { UpdatePostReqBody } from '../zustand';
import { useNavigate } from 'react-router-dom';
export const FormEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { post, showDetailPost, updatePost, setPost } = usePost();
  const [data, setData] = useState<UpdatePostReqBody>({
    title: '',
    body: '',
  });
  const submitUpdatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePost(Number(id), data);
    navigate('/', { replace: true });
  };
  useEffect(() => {
    showDetailPost(Number(id));
    setData({
      title: post.title,
      body: post.body,
    });
  }, []);
  return (
    <Box className='flex justify-center mt-4'>
      <Box className='max-w-screen-sm w-full rounded-lg border p-4 space-y-4 relative'>
        <Box onSubmit={(e) => submitUpdatePost(e)} component={'form'} className='space-y-5'>
          <Box>
            <Box component={'input'} value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} className='w-full p-2 border rounded-md' name='title' placeholder='Title' />
          </Box>
          <Box>
            <Box component={'textarea'} value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} className='w-full border p-2 rounded-md' name='body' placeholder='Body' />
          </Box>
          <Button type='submit' variant='contained' className='w-full'>
            Update Post
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
