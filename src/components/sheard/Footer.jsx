import { Box, Container, Divider, Typography } from '@mui/material';

function Footer() {
    return (
        <Box id='footer'>
            <Divider style={{ backgroundColor: '#bf5b04' }} />
            <Box
                className='footer_wrapper'
                sx={{
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: '0',
                }}
            >
                <Typography variant='body2'>
                    ©{new Date().getFullYear()} Lars Sandell
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
