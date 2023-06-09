import {
    Box,
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import Section from '../components/sectionComp/Section';
import { openInNewTab } from '../constant';
import backImg from '../assets/contact2.svg';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { StyledBtn } from '../Theme/muiStyles';

function Contact(props) {
    const { title, align, id, ...rest } = props;

    const sendMail = () => {
        window.location.href = 'mailto:larssandell@outlook.com';
    };

    return (
        <Container maxWidth='xl' {...rest}>
            <Section title='Contact' align='left'>
                <Box>
                    <Typography
                        variant='h4'
                        sx={{
                            transform: 'translateY(100%)',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Get in touch.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        minHeight: '400px',
                        width: '100%',
                        display: 'flex',
                        padding: 4,
                        backgroundImage: `url(${backImg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Grid
                        container
                        spacing={4}
                        sx={{
                            padding: '0',
                            marginTop: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Grid item>
                            <Card
                                sx={{
                                    backgroundColor: 'rgba(26, 26, 26, 0.7)',
                                }}
                            >
                                <CardContent>
                                    <Box>
                                        <AlternateEmailIcon
                                            sx={{
                                                width: '40px',
                                                height: 'auto',
                                            }}
                                        />
                                    </Box>
                                    <Typography variant='h5' component='div'>
                                        Get in touch on mail
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color='#fff'>
                                        larssandell@outlook.com
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <StyledBtn onClick={sendMail} fullWidth>
                                        here
                                    </StyledBtn>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card
                                sx={{
                                    backgroundColor: 'rgba(26, 26, 26, 0.7)',
                                }}
                            >
                                <CardContent>
                                    <Box>
                                        <LinkedInIcon
                                            sx={{
                                                width: '40px',
                                                height: 'auto',
                                            }}
                                        />
                                    </Box>
                                    <Typography variant='h5' component='div'>
                                        Get in touch on Linkedin
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color='#fff'>
                                        Send me a message.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <StyledBtn
                                        onClick={() =>
                                            openInNewTab(
                                                'https://www.linkedin.com/in/lars-sandell/'
                                            )
                                        }
                                        fullWidth
                                    >
                                        Here
                                    </StyledBtn>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Section>
        </Container>
    );
}

export default Contact;
