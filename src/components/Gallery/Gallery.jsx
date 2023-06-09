// import { projectList } from '../../data';
import { Grid } from '@mui/material';
import './Gallery.css';
import Card from './Card';
import Animation from './Animation';

function Gallery(props) {
    const { data, openModal, ...rest } = props;
    return (
        <Grid container spacing={5}>
            {data.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                    <Card data={item} open={openModal} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Gallery;
