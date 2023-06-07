// import { projectList } from '../../data';
import { Box, Container, Grid, Stack } from '@mui/material';
import './Gallery.css';
import Card from './Card';
import { projectList } from '../../data';
import Section from '../sectionComp/Section';
import Animation from './Animation';

function Gallery(props) {
    const { data, openModal, ...rest } = props;
    // console.log(props, 'from props Gallery');
    return (
        <Grid
            container
            sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
        >
            {data.map((item) => (
                <Grid item key={item.id}>
                    <Card data={item} open={openModal} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Gallery;
