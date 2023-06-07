import {
    Button,
    Container,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import SectionContainer from '../components/sectionComp/SectionContainer';
import { motion } from 'framer-motion';
import Typewriters from '../components/TypeWriters';
import Skiller from '../components/skiller';
import Section from '../components/sectionComp/Section';
import { useTheme } from '@emotion/react';
import bgImage from '../assets/magicpattern-grid-pattern.png';

function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    // console.log(matches);
    return (
        <Container maxWidth='xl' sx={{ backgroundImage: `url(${bgImage})` }}>
            <Section
                id='banner'
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography
                            component={motion.div}
                            custom={0}
                            color='text.primary'
                            variant='h4'
                        >
                            Hi there, i&apos;m
                        </Typography>

                        <Typewriters />

                        <Typography
                            component={motion.p}
                            // animate={controls}
                            custom={2}
                            variant='h3'
                            color='text.primary'
                            sx={{
                                marginBottom: '16px',
                                fontSize: '25px',
                            }}
                        >
                            Future Front-end developer!
                        </Typography>
                        <Typography
                            component={motion.p}
                            // animate={controls}
                            custom={3}
                            variant='h6'
                            style={{ marginBottom: '0' }}
                        >
                            Looking for work
                        </Typography>
                        <Typography
                            component={motion.p}
                            // animate={controls}
                            custom={4}
                            variant='body1'
                            style={{ marginBottom: '30px' }}
                        >
                            Based in Kristiansand, Norway.
                        </Typography>
                        <motion.div custom={5}>
                            <a href='../assets/CV-Lars_Sandell.pdf' download>
                                <Button>Resume</Button>
                            </a>
                        </motion.div>
                    </Grid>
                    {matches && (
                        <Grid item md={4} sx={{ justifyContent: 'flex-end' }}>
                            {/* <Skiller width='300px' /> */}
                        </Grid>
                    )}
                </Grid>
            </Section>
        </Container>
    );
}

export default Banner;
