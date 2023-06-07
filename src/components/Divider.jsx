import React from 'react';
import { Box } from '@mui/material';

const Divider = ({ fullWidth, width, ...rest }) => {
    const classes = { fullWidth, width };
    return (
        <Box
            sx={{
                display: 'inline',
                height: '5px',
                width: (props) => (props.fullWidth ? '100%' : props.width),
            }}
            className={classes.root}
            {...rest}
        ></Box>
    );
};

export default Divider;
