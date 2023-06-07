import { useContext, useState } from 'react';
import {
    AppBar,
    Box,
    Container,
    FormControlLabel,
    Switch,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';
import logoBlack from '../../assets/lars-logov2-black-final.svg';
import logoWhite from '../../assets/lars-logov2-white-final.svg';
import './Header.css';
import { ColorModeContext } from '../../Theme/Theme';
import Navigation from '../Navigation';

function Header() {
    const [changeNavBar, setChangeNavBar] = useState(false);
    const { mode, toggleMode } = useContext(ColorModeContext);
    // const [selected, setSelected] = useState(0);
    // console.log(selected);

    // console.log(mode);

    const scrollNav = () => {
        if (window.scrollY >= 90) {
            setChangeNavBar(true);
            // console.log('under 100');
        } else {
            setChangeNavBar(false);
            // console.log('over 100');
        }
    };

    window.addEventListener('scroll', scrollNav);

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
                    <Box>
                        <Box
                            component='img'
                            src={mode ? logoWhite : logoBlack}
                            alt='Site Logo L and an S'
                            sx={{ height: '60px', width: 'auto' }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }} />
                    <Navigation />

                    <Box sx={{ flex: 1 }} />
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
                </Container>
            </AppBar>
        </>
    );
}

export default Header;
