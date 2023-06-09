import {
    Box,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Card as MuiCard,
    IconButton,
} from '@mui/material';
import './Card.css';
import { motion, LayoutGroup } from 'framer-motion';
import { useCallback, useState } from 'react';
import { GitHub } from '@mui/icons-material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { openInNewTab } from '../../constant';

function Card({ data }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const [index, setIndex] = useState(false);

    const handleCloseIndex = useCallback(() => {
        setIndex(false);
    }, []);

    return (
        <LayoutGroup>
            <Box>
                <motion.div
                    whileHover={{ opacity: 0.8 }}
                    layoutId={`${data.id}`}
                    onClick={() => index === false && setIndex(data.id)}
                    initial={{ borderRadius: '0.6rem' }}
                >
                    <MuiCard
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
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
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='div'
                            >
                                {data.title}
                            </Typography>
                        </CardContent>
                        <Box>
                            <IconButton
                                onClick={() => openInNewTab(data.gitHub)}
                                sx={{ marginRight: '10px' }}
                            >
                                <GitHub />
                            </IconButton>
                            <IconButton
                                onClick={() => openInNewTab(data.liveServer)}
                            >
                                <LiveTvIcon />
                            </IconButton>
                        </Box>
                        <CardActions>
                            {data.technologies.map((tech) => (
                                <Typography key={tech} variant='body2'>
                                    {tech},
                                </Typography>
                            ))}
                        </CardActions>
                    </MuiCard>
                </motion.div>
            </Box>
        </LayoutGroup>
    );
}

export default Card;

// function Card({ data }) {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen(true);
//     };

//     const handleClose = () => {
//         setIsOpen(false);
//     };

//     return (
//         <LayoutGroup>
//             <Box>
//                 <motion.div
//                     whileHover={{ opacity: 0.6 }}
//                     // whileTap={{ scale: 0.95 }}
//                     onClick={handleClick}
//                 >
//                     <MuiCard
//                         sx={{
//                             height: '100%',
//                             minWidth: '300px',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             justifyContent: 'space-between',
//                         }}
//                         component={motion.div}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.9 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         <CardMedia
//                             sx={{ height: 250, objectFit: 'cover' }}
//                             image={data.frontImage}
//                             title={data.title}
//                         />
//                         <CardContent>
//                             <Typography
//                                 gutterBottom
//                                 variant='h5'
//                                 component='div'
//                             >
//                                 {data.title}
//                             </Typography>
//                         </CardContent>

//                         <CardActions>
//                             {data.technologies.map((tech) => (
//                                 <Typography key={tech} variant='body2'>
//                                     {tech},
//                                 </Typography>
//                             ))}
//                         </CardActions>
//                     </MuiCard>
//                 </motion.div>
//                 <AnimatePresence>
//                     {isOpen && (
//                         <Dialog
//                             // fullWidth
//                             // maxWidth='sm'
//                             PaperProps={{
//                                 sx: {
//                                     maxWidth: '90vw',
//                                     minWidth: '90vw',
//                                     minHeight: '60vh',
//                                     Height: '60vh',
//                                 },
//                             }}
//                             open={isOpen}
//                             onClose={handleClose}
//                         >
//                             <MuiCard
//                                 component={motion.div}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={handleClick}
//                             >
//                                 <CardMedia
//                                     sx={{
//                                         height: '60vh',
//                                         objectPosition: 'top',
//                                         objectFit: 'cover',
//                                     }}
//                                     image={data.frontImage}
//                                     title={data.title}
//                                 />
//                                 <CardContent>
//                                     <Typography
//                                         gutterBottom
//                                         variant='h5'
//                                         component='div'
//                                     >
//                                         {data.title}
//                                     </Typography>
//                                     <Typography
//                                         variant='body2'
//                                         color='text.secondary'
//                                     >
//                                         {data.description}
//                                     </Typography>
//                                     <CardContent>
//                                         <IconButton
//                                             onClick={() =>
//                                                 openInNewTab(data.gitHub)
//                                             }
//                                         >
//                                             <GitHub />
//                                         </IconButton>
//                                         <IconButton
//                                             onClick={() =>
//                                                 openInNewTab(data.liveServer)
//                                             }
//                                         >
//                                             <LiveTvIcon />
//                                         </IconButton>
//                                     </CardContent>
//                                 </CardContent>
//                                 <CardActions sx={{ marginBottom: 2 }}>
//                                     {data.technologies.map((tech) => (
//                                         <Typography key={tech} variant='body2'>
//                                             {tech},
//                                         </Typography>
//                                     ))}
//                                 </CardActions>
//                             </MuiCard>
//                         </Dialog>
//                     )}
//                 </AnimatePresence>
//             </Box>
//         </LayoutGroup>
//     );
// }

// export default Card;

// clean code

// function Card({ data }) {
//     return (
//         <Box>
//             <div>
//                 <MuiCard
//                     sx={{
//                         height: '100%',
//                         minWidth: '300px',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'space-between',
//                     }}
//                 >
//                     <CardMedia
//                         sx={{ height: 250, objectFit: 'cover' }}
//                         image={data.frontImage}
//                         title={data.title}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant='h5' component='div'>
//                             {data.title}
//                         </Typography>
//                     </CardContent>

//                     <CardActions>
//                         {data.technologies.map((tech) => (
//                             <Typography key={tech} variant='body2'>
//                                 {tech},
//                             </Typography>
//                         ))}
//                     </CardActions>
//                 </MuiCard>
//             </div>
//         </Box>
//     );
// }

// export default Card;
