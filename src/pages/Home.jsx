import { motion } from 'framer-motion';
import Banner from '../sections/Banner';
import About from '../sections/About';
import Card from '../components/Gallery';
import { projectList } from '../data';
import Gallery from '../components/Gallery/Gallery';
import GalleryContainer from '../components/Gallery/GalleryContainer';
import Contact from '../sections/Contact';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
        >
            <Banner />
            <About title='About' id='about' />
            <GalleryContainer data={projectList} />
            <Contact title='Contact' id='contact' />
            {/* <Card data={projectList} /> */}
            {/* <ProjectsGallery /> */}
        </motion.div>
    );
}

export default Home;
