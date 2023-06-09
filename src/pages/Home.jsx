import { AnimatePresence, motion } from 'framer-motion';
import Banner from '../sections/Banner';
import About from '../sections/About';
// import Card from '../components/Gallery';
import { projectList } from '../data';
// import Gallery from '../components/Gallery/Gallery';
import GalleryContainer from '../components/Gallery/GalleryContainer';
import Contact from '../sections/Contact';
// import ProjectGallery from '../components/testGallery/ProjectGallery';
import MainSection from '../components/sectionComp/MainSection';

function Home() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                }}
            >
                <MainSection id='banner'>
                    <Banner />
                </MainSection>
                <MainSection id='about'>
                    <About title='About' id='about' />
                </MainSection>
                <MainSection id='projects'>
                    <GalleryContainer data={projectList} />
                </MainSection>
                <MainSection id='contact'>
                    <Contact title='Contact' id='contact' />
                </MainSection>
                {/* <MainSection id='test'>
                    <ProjectGallery
                        data={projectList}
                        title='Projects'
                        id='projectss'
                    />
                </MainSection> */}
            </motion.div>
        </AnimatePresence>
    );
}

export default Home;
