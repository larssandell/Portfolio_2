import { Container } from '@mui/material';
import Section from '../sectionComp/Section';
import Gallery from './Gallery';
import Animation from './Animation';

// main wrapper
function GalleryContainer(props) {
    const { data, ...rest } = props;
    // console.log(data, 'from GalleryContainer -> Animation');

    return (
        <Container maxWidth='xl' sx={{ marginBottom: '50px' }} {...rest}>
            <Section title='Projects' align='right' id='projects'>
                <Animation data={data} />
                {/* <Gallery data={data} /> */}
            </Section>
        </Container>
    );
}

export default GalleryContainer;
