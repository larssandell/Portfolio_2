import { useContext, useState } from 'react';
import {
    AppBar,
    Box,
    Container,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import logoBlack from '../../assets/lars-logov2-black-final.svg';
import logoWhite from '../../assets/lars-logov2-white-final.svg';
import './Header.css';
import { ColorModeContext } from '../../Theme/Theme';
import { RiMenu3Fill } from 'react-icons/ri';
import Nav from '../nav/Nav';
import { Link } from 'react-scroll';
import bgImg from '../../assets/contact2.svg';
import { useEffect } from 'react';

function Header() {
    const [changeNavBar, setChangeNavBar] = useState(false);
    const { mode, toggleMode } = useContext(ColorModeContext);
    const [open, setOpen] = useState(false);

    let drawerDuration = 100;
    let drawerOffset = -90;

    const toggleMenuDrawer = (e) => {
        if (e.type === 'keydown' && (e.key === 'tab' || e.key === 'shift')) {
            return;
        }
        setOpen(!open);
    };
    const closeDrawer = () => {
        setOpen(false);
    };

    const scrollNav = () => {
        if (window.scrollY >= 90) {
            setChangeNavBar(true);
        } else {
            setChangeNavBar(false);
        }
    };
    const theme = useTheme();

    window.addEventListener('scroll', scrollNav);
    const medium = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        if (medium) {
            setOpen(false);
        }
    }, [medium]);

    return (
        <>
            <AppBar
                id='header'
                position='fixed'
                className={changeNavBar ? 'activeNav' : 'startNav'}
                sx={{
                    transition: 'all ease-in-out 0.8s',
                    backgroundColor: 'default',
                    backgroundImage: 'none',
                    overflow: 'hidden',
                }}
                elevation={changeNavBar ? 4 : 0}
            >
                <Container
                    maxWidth='xl'
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Grid item>
                            <Box
                                component='img'
                                src={mode ? logoWhite : logoBlack}
                                alt='Site Logo L and an S'
                                sx={{ height: '60px', width: 'auto' }}
                            />
                        </Grid>
                        <Grid item>
                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'block' },
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Nav />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                            }}
                        >
                            <IconButton
                                aria-label='hamburger icon'
                                aria-controls='hamburger'
                                aria-haspopup='true'
                                onClick={toggleMenuDrawer}
                                disableRipple
                                sx={{
                                    display: {
                                        xs: 'flex',
                                        md: 'none',
                                    },
                                    '& :hover': {
                                        color: '#bf5b04',
                                    },
                                }}
                            >
                                <RiMenu3Fill
                                    fontSize='40px'
                                    sx={{
                                        // alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        display: 'flex',
                                    }}
                                />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', flexDirection: 'reverse' }} />

                    {/* <Box
                        sx={{
                            flex: 1,
                            display: { xs: 'flex', md: 'none' },
                            flexDirection: 'end',
                        }}
                    /> */}

                    {/* <FormControlLabel
                        control={
                            <Switch
                                checked={mode}
                                onChange={toggleMode}
                                color='primary'
                                sx={{
                                    '& .MuiSwitch-switchBase+.MuiSwitch-track':
                                        {
                                            backgroundColor: 'lightgreen',
                                        },
                                }}
                            />
                        }
                        label={
                            mode ? (
                                <Brightness2RoundedIcon />
                            ) : (
                                <LightModeIcon />
                            )
                        }
                    /> */}

                    {/* Drawer */}
                    <Drawer
                        anchor='right'
                        open={open}
                        onClose={closeDrawer}
                        PaperProps={{
                            sx: {
                                backgroundImage: `url(${bgImg})`,
                                backgroundPosition: 'contain',
                                width: '40%',
                            },
                        }}
                    >
                        <Box>
                            <List>
                                <ListItemButton sx={{ color: 'white' }}>
                                    <Link
                                        to='banner'
                                        spy={true}
                                        smooth={true}
                                        offset={drawerOffset}
                                        duration={drawerDuration}
                                        onClick={closeDrawer}
                                    >
                                        <ListItemText primary={'Home'} />
                                    </Link>
                                </ListItemButton>
                                <ListItemButton sx={{ color: 'white' }}>
                                    <Link
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={drawerOffset}
                                        duration={drawerDuration}
                                        onClick={closeDrawer}
                                    >
                                        <ListItemText primary={'About'} />
                                    </Link>
                                </ListItemButton>
                                <ListItemButton sx={{ color: 'white' }}>
                                    <Link
                                        to='projects'
                                        spy={true}
                                        smooth={true}
                                        offset={drawerOffset}
                                        duration={drawerDuration}
                                        onClick={closeDrawer}
                                    >
                                        <ListItemText primary={'Projects'} />
                                    </Link>
                                </ListItemButton>
                                <ListItemButton sx={{ color: 'white' }}>
                                    <Link
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        offset={drawerOffset}
                                        duration={drawerDuration}
                                        onClick={closeDrawer}
                                    >
                                        <ListItemText primary={'Contact'} />
                                    </Link>
                                </ListItemButton>
                            </List>
                        </Box>
                    </Drawer>
                </Container>
            </AppBar>
        </>
    );
}

export default Header;
