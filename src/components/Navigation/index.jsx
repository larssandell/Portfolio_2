import { Box, Button, Tab, Tabs } from '@mui/material';
// import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Navigation.css';
import PDF from '../../assets/CV-Lars_Sandell.pdf';

const sections = [
    { id: 'banner', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

function Navigation() {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const [scrollOffset, setScrollOffset] = useState(0);

    const handleScroll = () => {
        const { scrollTop } = document.documentElement || document.body;
        setScrollOffset(scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const scrollPositions = sections.map((section) => {
            const element = document.getElementById(section.id);
            return {
                id: section.id,
                offsetTop: element ? element.offsetTop : 0,
            };
        });

        const { innerHeight } = window;
        const currentSection = scrollPositions.reduce((prev, curr) => {
            if (curr.offsetTop - innerHeight * 0.5 <= scrollOffset) {
                return curr;
            }
            return prev;
        }, scrollPositions[0]);

        setActiveSection(currentSection.id);
    }, [scrollOffset]);

    const handleTabChange = (event, sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Tabs
            value={activeSection}
            onChange={handleTabChange}
            // TabIndicatorProps={{
            //     sx: {
            //         backgroundColor: '#bf5b04',
            //         transition: 'all 0.1s ease-in-out',
            //     },
            // }}
            // sx={{
            //     '& button': {
            //         color: '#ffffff',
            //         opacity: '0.7',
            //         borderRadius: '10px',
            //     },
            //     '& button:hover': { color: '#bf5b04' },
            //     '& button:active': {
            //         color: '#ffffff',
            //         opacity: '1',
            //     },
            //     '& button:selected': {
            //         color: '#ffffff',
            //         opacity: '1',
            //     },
            //     '& MuiButtonBase-root-MuiTab': {
            //         color: '#ffffff',
            //     },
            //     '& .Mui-selected': {
            //         color: '#ffffff',
            //         opacity: '1',
            //     },
            // }}
        >
            {sections.map((section) => (
                <Tab
                    key={section.id}
                    sx={{ fontSize: '1rem' }}
                    disableRipple
                    label={section.label}
                    value={section.id}
                    id={`nav${section.label}`}
                />
            ))}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <a href={PDF} rel='noreferrer' target='_blank'>
                    <Button
                        // sx={{
                        //     color: '#bf5b04',
                        //     borderColor: '#bf5b04',
                        //     marginLeft: '30px',
                        //     '&:hover': {
                        //         borderColor: '#fff',
                        //         color: '#fff',
                        //     },
                        // }}
                        variant='outlined'
                    >
                        Resume
                    </Button>
                </a>
            </Box>
        </Tabs>
    );
}

export default Navigation;

// const tabs = [
//     { id: 0, label: 'About', href: '/#about' },
//     { id: 1, label: 'Experience', href: '/#experience' },
//     { id: 2, label: 'Projects', href: '/#projects' },
//     { id: 3, label: 'Contact', href: '/#contact' },
// ];

// function Navigation() {
//     const [tabIndex, setTabIndex] = useState(0);

//     return (
//         <AnimatePresence>
//             <Tabs
//                 component={motion.div}
//                 TabIndicatorProps={{
//                     sx: {
//                         backgroundColor: 'text.variant',
//                         transition: 'all 0.1s ease-in-out',
//                     },
//                 }}
//                 transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//                 sx={{
//                     '& button': {
//                         color: '#ffffff',
//                         opacity: '0.7',
//                         borderRadius: '10px',
//                     },
//                     '& button:hover': { color: '#bf5b04' },
//                     '& button:active': {
//                         color: '#ffffff',
//                         opacity: '1',
//                     },
//                     '& button.Mui-selected': {
//                         opacity: '1',
//                         color: '#ffffff',
//                     },
//                     '& Mui-selected': {
//                         color: '#ffffff',
//                     },
//                 }}
//                 value={tabIndex}
//                 onChange={(e, value) => setTabIndex(value)}
//             >
//                 <Tab
//                     sx={{ fontSize: '1rem' }}
//                     disableRipple
//                     label='Home'
//                     id='navHome'
//                 />
//                 <Tab
//                     sx={{ fontSize: '1rem' }}
//                     disableRipple
//                     label='About'
//                     id='navAbout'
//                 />
//                 {/* <Tab label='Experience' id='navExperience' /> */}
//                 <Tab
//                     sx={{ fontSize: '1rem' }}
//                     disableRipple
//                     label='Projects'
//                     id='navProjects'
//                 />
//                 <Tab
//                     sx={{ fontSize: '1rem' }}
//                     disableRipple
//                     label='Contact'
//                     id='navContact'
//                 />
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <a href={PDF} without rel='noreferrer' target='_blank'>
//                         <Button
//                             sx={{
//                                 color: '#bf5b04',
//                                 borderColor: '#bf5b04',
//                                 marginLeft: '30px',
//                                 '&:hover': {
//                                     borderColor: '#fff',
//                                     color: '#fff',
//                                 },
//                             }}
//                             variant='outlined'
//                         >
//                             Resume
//                         </Button>
//                     </a>
//                 </Box>
//             </Tabs>
//         </AnimatePresence>
//     );
// }

// export default Navigation;
