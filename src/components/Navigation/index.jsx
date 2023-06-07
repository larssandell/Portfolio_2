import { Button, Tab, Tabs } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Navigation.css';

// const tabs = [
//     { id: 0, label: 'About', href: '/#about' },
//     { id: 1, label: 'Experience', href: '/#experience' },
//     { id: 2, label: 'Projects', href: '/#projects' },
//     { id: 3, label: 'Contact', href: '/#contact' },
// ];

function Navigation() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <>
            <Tabs
                component={motion.div}
                TabIndicatorProps={{
                    // title: 'NavIndicator',
                    sx: {
                        backgroundColor: 'text.secondary',
                        transition: 'ease-in',
                    },
                }}
                // transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                // indicatorColor=text.secondary
                sx={{
                    '& button': { color: 'text.primary', opacity: '0.7' },
                    '& button:hover': { color: 'text.secondary' },
                    '& button:active': {
                        color: 'text.secondary',
                        opacity: '1',
                    },
                    '& button.Mui-selected': {
                        color: 'text.secondary',
                        opacity: '1',
                    },
                    '& Mui-selected': {
                        color: 'text.secondary',
                    },
                }}
                // indicatorColor='secondary'
                value={tabIndex}
                onChange={(e, value) => setTabIndex(value)}
            >
                <Tab label='Home' id='navHome' />
                <Tab label='About' id='navAbout' />
                {/* <Tab label='Experience' id='navExperience' /> */}
                <Tab label='Projects' id='navProjects' />
                <Tab label='Contact' id='navContact' />
                <Button
                    sx={{
                        color: '#bf5b04',
                        border: 'solid 1px #bf5b04',
                        marginLeft: '30px',
                    }}
                    variant='outlined'
                >
                    Resume
                </Button>
            </Tabs>
        </>
    );
}

export default Navigation;
