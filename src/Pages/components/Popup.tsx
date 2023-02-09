import { Box } from '@mui/material';
import { FiEdit, FiTrash2, FiInfo } from 'react-icons/fi';
import { RxDotsHorizontal } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { PopupProps } from '..';
import { usePost } from '../../zustand/PostStore';

export const Popup: React.FC<PopupProps> = ({ id, popup }) => {
  const { handlePopup, setPopup } = usePost();
  return (
    <>
      <RxDotsHorizontal onClick={() => handlePopup(id)} className='absolute top-2 right-2 cursor-pointer' />
      <Box className={`${!popup || !setPopup ? 'hidden' : ''} bg-white absolute top-5 right-5 rounded-md drop-shadow-xl overflow-hidden`}>
        <Box component={'ul'} className='divide-y'>
          <Box component={'li'} className='flex gap-1 items-center p-2 cursor-pointer hover:bg-gray-100'>
            <FiTrash2 />
            <Box component={'span'} className='text-sm font-medium'>
              Delete
            </Box>
          </Box>
          <Link to={`/edit/${id}`}>
            <Box component={'li'} className='flex gap-1 items-center p-2 cursor-pointer hover:bg-gray-100'>
              <FiEdit />
              <Box component={'span'} className='text-sm font-medium'>
                Update
              </Box>
            </Box>
          </Link>
          <Link to={`/detail/${id}`}>
            <Box component={'li'} className='flex gap-1 items-center p-2 cursor-pointer hover:bg-gray-100'>
              <FiInfo />
              <Box component={'span'} className='text-sm font-medium'>
                Detail
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};
