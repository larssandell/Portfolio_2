import { Box, Container, Grid, Typography } from '@mui/material';
// import SectionContainer from '../components/sectionComp/SectionContainer';
import profilePicture from '../assets/lars-profil.jpg';
import Section from '../components/sectionComp/Section';
import FrontEnd from '../components/knowledge/FrontEnd';
import Additional from '../components/knowledge/Additional';

const About = (props) => {
    // console.log(props);

    return (
        <Container maxWidth='xl' sx={{ marginBottom: '50px' }} {...props}>
            <Section title={props.title} align='left'>
                <Grid
                    container
                    spacing={4}
                    sx={{ px: 2, width: '100%', justifyContent: 'center' }}
                >
                    <Grid
                        item
                        // xs={12}
                        sm={12}
                        md={8}
                        order={{ xs: 2, sm: 2, md: 1 }}
                        // xs={8}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: {
                                    xs: '1.1rem',
                                    lg: '1.4rem',
                                },
                            }}
                        >
                            I'm currently studying at Noroff Norway. The course
                            I'm taking is Front-end Dev. And I have earlier
                            worked as an IT-consultant with hardware,
                            installations, deployment and management. I wanted
                            to try something different but in the IT branch.
                            Programming and development have always interested
                            me, so, the choice was a no "brainer". I'm now soon
                            finished with my first year and looking forward to
                            the next.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        // xs={4}

                        sm={12}
                        md={4}
                        order={{ sm: 1, xs: 1, md: 2 }}
                        justifyContent={{
                            lg: 'end',
                            sm: 'center',
                            md: 'center',
                        }}
                        sx={{
                            display: 'flex',
                            // justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component='img'
                            src={profilePicture}
                            alt='Picture of me'
                            sx={{
                                width: 'auto',
                                height: '300px',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                borderRadius: '20px',
                            }}
                        />
                    </Grid>
                    <Grid item order={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                sx={{ textAlign: 'center', marginBottom: 1 }}
                                variant='body1'
                            >
                                Front-end knowledge
                            </Typography>
                            <Box>
                                <FrontEnd />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item order={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                sx={{ textAlign: 'center', marginBottom: 1 }}
                                variant='body1'
                            >
                                Additional
                            </Typography>
                            <Box>
                                <Additional />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Section>
        </Container>
    );
};

export default About;
