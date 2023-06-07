import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Section = (props) => {
    const { children, title, id, ...restProps } = props;

    const titleControls = useAnimation();
    const contentControls = useAnimation();
    const [titleRef, titleInView] = useInView();
    const [contentRef, contentInView] = useInView();
    const [contentStart, setContentStart] = useState(false);

    useEffect(() => {
        if (titleInView) {
            titleControls.start('visible');
        }
    }, [titleControls, titleInView]);

    useEffect(() => {
        if (contentInView) {
            setContentStart(true);
            contentControls.start('visible');
        }
    }, [contentControls, contentInView]);
    // console.log(restProps);
    return (
        <Box
            ref={titleRef}
            id={id}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                ...restProps.sx,
            }}
        >
            {title && (
                <Divider
                    flexItem
                    textAlign={props.align}
                    sx={{ mb: 6, color: 'text.variant' }}
                >
                    <Typography variant='h4' color='text.variant'>
                        {title}
                    </Typography>
                </Divider>
            )}
            {children}
        </Box>
    );
};

export default Section;
