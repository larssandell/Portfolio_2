import { Box, Container, Divider, Typography } from '@mui/material';

function Footer() {
    return (
        <Box id='footer'>
            <Divider style={{ backgroundColor: 'blue' }} />
            <Container
                className='footer_wrapper'
                sx={{
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    textAlign: 'center',
                }}
            >
                {/* {isMobile && <Social mobile />} */}
                <Typography variant='body2'>
                    ©{new Date().getFullYear()} Lars Sandell
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
