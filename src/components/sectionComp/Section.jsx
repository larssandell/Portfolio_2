import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Section = (props) => {
    const { children, title, id, reverse, ...restProps } = props;

    const titleControls = useAnimation();
    const contentControls = useAnimation();
    const [titleRef, titleInView] = useInView();
    const [contentRef, contentInView] = useInView();
    const [contentStart, setContentStart] = useState(false);
    // console.log(heightValue);

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
            animate={titleControls}
            initial='hidden'
            transition={{
                delay: 0.3,
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '50px',
                // minHeight: må finne ut av dette senere
                ...restProps.sx,
            }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: reverse ? 0 : 0 },
            }}
        >
            {title && (
                <Divider
                    flexItem
                    background='text.variant'
                    textAlign={props.align ? props.align : 'right'}
                    sx={{ mb: 6, color: 'text.variant' }}
                >
                    <Typography
                        sx={{ textTransform: 'uppercase' }}
                        variant='h4'
                        color='text.variant'
                    >
                        {title}
                    </Typography>
                </Divider>
            )}
            {children}
        </Box>
    );
};

export default Section;
