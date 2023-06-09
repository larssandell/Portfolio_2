import { Container } from '@mui/material';
import Section from '../sectionComp/Section';
import Animation from './Animation';

// main wrapper
function GalleryContainer(props) {
    const { data, ...rest } = props;

    return (
        <Container maxWidth='xl' sx={{ marginBottom: '50px' }} {...rest}>
            <Section title='Projects' align='right' id='projects'>
                <Animation data={data} />
            </Section>
        </Container>
    );
}

export default GalleryContainer;
