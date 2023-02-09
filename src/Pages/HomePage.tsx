import { Box } from '@mui/material';
import { Card } from './components/Card';
import { useEffect } from 'react';
import { usePost } from '../zustand/PostStore';

export const HomePage = () => {
  const { posts, setPosts } = usePost();
  useEffect(() => {
    setPosts();
  }, []);
  return (
    <Box className='grid grid-cols-3 gap-4 mt-4'>
      {posts.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </Box>
  );
};
