import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Gallery from './Gallery';

const Animation = ({ data }) => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <AnimatePresence>
                <Gallery data={data} open={openModal} />
            </AnimatePresence>
        </>
    );
};

export default Animation;
