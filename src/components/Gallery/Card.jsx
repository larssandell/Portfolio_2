import {
    Box,
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Card as MuiCard,
    Dialog,
    IconButton,
} from '@mui/material';
import './Card.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GitHub } from '@mui/icons-material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { openInNewTab } from '../../constant';

// Listings
function Card({ data }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Box>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
            >
                <MuiCard
                    sx={{ width: '300px', cursor: 'pointer' }}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    <CardMedia
                        sx={{ height: 250, objectFit: 'cover' }}
                        image={data.frontImage}
                        title={data.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {data.title}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {data.description}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        {data.technologies.map((tech) => (
                            <Typography key={tech} variant='body2'>
                                {tech},
                            </Typography>
                        ))}
                    </CardActions>
                </MuiCard>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <Dialog
                        // fullWidth
                        // maxWidth='sm'
                        PaperProps={{
                            sx: {
                                maxWidth: '90vw',
                                minWidth: '90vw',
                                minHeight: '60vh',
                                Height: '60vh',
                            },
                        }}
                        open={isOpen}
                        onClose={handleClose}
                    >
                        <MuiCard
                            component={motion.div}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleClick}
                        >
                            <CardMedia
                                sx={{
                                    height: '60vh',
                                    objectPosition: 'top',
                                    objectFit: 'cover',
                                }}
                                image={data.frontImage}
                                title={data.title}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {data.description}
                                </Typography>
                                <CardContent>
                                    <IconButton
                                        onClick={() =>
                                            openInNewTab(data.gitHub)
                                        }
                                    >
                                        <GitHub />
                                    </IconButton>
                                    <IconButton
                                        onClick={() =>
                                            openInNewTab(data.liveServer)
                                        }
                                    >
                                        <LiveTvIcon />
                                    </IconButton>
                                </CardContent>
                            </CardContent>
                            <CardActions sx={{ marginBottom: 2 }}>
                                {data.technologies.map((tech) => (
                                    <Typography key={tech} variant='body2'>
                                        {tech},
                                    </Typography>
                                ))}
                            </CardActions>
                        </MuiCard>
                    </Dialog>
                )}
            </AnimatePresence>
        </Box>
    );
}

export default Card;
