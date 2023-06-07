import { Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';

function Typewriters() {
    return (
        <div className='type_wrapper'>
            <Typography variant='h3' color='text.variant' sx={{ mb: 1 }}>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        pauseFor: 1500,
                        strings: ['Lars Sandell'],
                    }}
                />
            </Typography>
        </div>
    );
}

export default Typewriters;
