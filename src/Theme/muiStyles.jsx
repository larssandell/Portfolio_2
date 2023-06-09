import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)({
    color: '#fff',
    backgroundColor: 'transparent',
    borderColor: '#bf5b04',

    '&:hover': {
        color: '#bf5b04',
        borderColor: '#fff',
    },
    '&.Mui-selected': {
        color: '#fff',
    },
    '& .MuiTouchRipple-child': {
        backgroundColor: '#fff',
    },
});
export function StyledBtn(props) {
    return <StyledButton variant='outlined' {...props} />;
}
