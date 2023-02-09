import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Popup } from './Popup';
import { PostResBody } from '../../zustand';

export const Card: React.FC<PostResBody> = ({ id, title, body, userId, popup }) => {
  return (
    <Box className='border p-3 rounded-md flex flex-col justify-around relative'>
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='body1'>{body}</Typography>
      <Popup id={id} popup={popup} />
    </Box>
  );
};
