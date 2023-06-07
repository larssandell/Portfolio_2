import { Box } from '@mui/material';
import * as ReactIcon from 'react-icons';

function Icons({ iconName }) {
    const Icon = ReactIcon[iconName];

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '30px',
                height: 'auto',
            }}
        >
            <Icon />
        </Box>
    );
}

export default Icons;
