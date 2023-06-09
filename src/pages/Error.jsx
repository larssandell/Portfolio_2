import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledBtn } from '../Theme/muiStyles';
import bgImg from '../assets/contact2.svg';

function Error() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                pt: 15,
                height: '90vh',
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Typography variant='h3' sx={{ fontSize: 120 }}>
                404
            </Typography>
            <Typography variant='p' sx={{ fontSize: 30 }}>
                This is a one page site
            </Typography>
            <StyledBtn onClick={() => navigate('/')}>Back home</StyledBtn>
        </Box>
    );
}

export default Error;
