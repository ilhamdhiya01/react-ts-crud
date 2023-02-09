import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useParams, useNavigate } from 'react-router-dom';
import { usePost } from '../zustand/PostStore';

export const DetailPostPage = () => {
  const { id } = useParams();
  const { showDetailPost, post } = usePost();
  const navigate = useNavigate();
  const backToHome = () => {
    navigate('/', { replace: true });
  };
  useEffect(() => {
    showDetailPost(Number(id));
  }, []);
  return (
    <Box className='flex justify-center mt-4'>
      <Box className='max-w-screen-md w-full rounded-lg border p-4 space-y-4 relative'>
        <FiX onClick={backToHome} className='absolute top-2 right-2' />
        <Typography variant='h4'>{post.title}</Typography>
        <Typography variant='body1'>{post.body}</Typography>
      </Box>
    </Box>
  );
};
