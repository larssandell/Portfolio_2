import {
    Button,
    Container,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import Typewriters from '../components/TypeWriters';
import Section from '../components/sectionComp/Section';
import { useTheme } from '@emotion/react';
import bgImage from '../assets/magicpattern-grid-pattern.png';
import PDF from '../assets/CV-Lars_Sandell.pdf';
import { StyledBtn } from '../Theme/muiStyles';

function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    // console.log(matches);
    return (
        <Container maxWidth='xl' sx={{ backgroundImage: `url(${bgImage})` }}>
            <Section
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
                            Front-end developer!
                        </Typography>
                        <Typography
                            component={motion.p}
                            // animate={controls}
                            custom={3}
                            variant='h6'
                            style={{ marginBottom: '0' }}
                        >
                            Currently looking for work.
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
                            <a href={PDF} rel='noreferrer' target='_blank'>
                                <StyledBtn>Resume</StyledBtn>
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
