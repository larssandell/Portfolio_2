import { Outlet } from 'react-router-dom';
import Header from '../components/sheard/Header';
import Footer from '../components/sheard/Footer';
import { Box, Container } from '@mui/material';

function Layout() {
    return (
        <Box className='main__wrapper'>
            <Header />
            <Box
                id='main'
                // sx={{ height: '100vh' }}
            >
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}

export default Layout;
