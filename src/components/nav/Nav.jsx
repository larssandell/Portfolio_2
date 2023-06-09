import { useEffect, useState, useMemo } from 'react';
import { Tab, Tabs } from '@mui/material';
import './Nav.css';

function Nav() {
    const [activeTab, setActiveTab] = useState(0);

    const navItems = useMemo(
        () => [
            { label: 'Home', id: 'banner' },
            { label: 'About', id: 'about' },
            { label: 'Projects', id: 'projects' },
            { label: 'Contact', id: 'contact' },
        ],
        []
    );

    const handleClickScroll = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const offset = 90;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        const elementId = newValue === 0 ? 'banner' : `section-${newValue}`;
        handleClickScroll(elementId);
    };

    useEffect(() => {
        const currentSectionId = navItems[activeTab].id;
        handleClickScroll(currentSectionId);
    }, [navItems, activeTab]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Tabs
            className='header__nav'
            value={activeTab}
            onChange={handleTabChange}
            sx={{
                color: '#fff',

                '& .Mui-selected': { color: '#fff' },
            }}
            TabIndicatorProps={{
                sx: {
                    display: 'none',
                },
            }}
        >
            {navItems.map((item, index) => (
                <Tab
                    key={item.id}
                    sx={{ fontSize: '1rem', color: '#fff' }}
                    // label={item.label}
                    TouchRippleProps={{ classes: { child: 'TouchRipple' } }}
                    label={<span className='nav__span'>{item.label}</span>}
                />
            ))}
        </Tabs>
    );
}

export default Nav;
