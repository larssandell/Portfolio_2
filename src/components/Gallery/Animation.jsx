import { useState } from 'react';
import Card from './Card';
import { AnimatePresence } from 'framer-motion';
// import Overlay from './Overlay';
import { Dialog } from '@mui/material';
import Gallery from './Gallery';

const Animation = ({ data }) => {
    const [open, setOpen] = useState(false);
    // console.log(data, 'from Animation -> Gallery');

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
                {/* {open && (
                    <Overlay close={closeModal}>
                        <Dialog data={data} close={closeModal} />
                    </Overlay>
                )} */}
            </AnimatePresence>
        </>
    );
};

export default Animation;
