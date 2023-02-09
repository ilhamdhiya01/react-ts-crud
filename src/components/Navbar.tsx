import { Box } from '@mui/material';
const Navbar: React.FC = () => {
  return (
    <Box component={'header'}>
      <Box component={'nav'}>
        <Box className='w-full h-[10vh] border-b flex'>
          <Box component={'h2'} className='text-2xl font-semibold text-[#252525] m-auto'>
            React CRUD
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;
