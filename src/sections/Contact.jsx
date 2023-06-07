import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Section from '../components/sectionComp/Section';
import { IoMdMail, IoLogoLinkedin } from 'react-icons/io';
import bgImage from '../assets/grid-final.png';
import { openInNewTab } from '../constant';

function Contact(props) {
    const { title, align, id, ...rest } = props;
    return (
        <Container maxWidth='xl' sx={{ marginBottom: '50px' }} {...rest}>
            <Section title='Contact' align='left' id='contact'>
                <Box sx={{ marginBottom: 4 }}>
                    <Typography variant='h5'>
                        Feel free to contact me if you want to know more
                    </Typography>
                </Box>
                <Grid
                    container
                    gap={15}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Grid
                        item
                        sx={{
                            boxShadow: 4,
                            backgroundColor: 'background.default',
                            borderRadius: '5px',
                            width: '300px',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: 4,
                            flexDirection: 'column',
                            backgroundImage: `url(${bgImage})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                            }}
                        >
                            <Box>
                                <IoMdMail size={50} />
                            </Box>
                            <Typography
                                variant='h6'
                                sx={{ marginBottom: 5, marginTop: 3 }}
                            >
                                larssandell@outlook.com
                            </Typography>
                            <Button
                                href='mailto:larssandell@outlook.com'
                                variant='outlined'
                            >
                                Mail
                            </Button>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            boxShadow: 4,
                            backgroundColor: 'background.default',
                            borderRadius: '5px',
                            width: '300px',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: 4,
                            flexDirection: 'column',
                            backgroundImage: `url(${bgImage})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                            }}
                        >
                            <Box>
                                <IoLogoLinkedin size={50} />
                            </Box>
                            <Typography
                                variant='h6'
                                sx={{ marginBottom: 5, marginTop: 3 }}
                            >
                                Send a message
                            </Typography>
                            <Button
                                variant='outlined'
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.linkedin.com/in/lars-sandell/'
                                    )
                                }
                            >
                                Mail
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Section>
        </Container>
    );
}

export default Contact;
