import { Outlet } from 'react-router-dom';
import Header from '../components/sheard/Header';
import Footer from '../components/sheard/Footer';
import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

function Layout() {
    return (
        <AnimatePresence>
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
        </AnimatePresence>
    );
}

export default Layout;
