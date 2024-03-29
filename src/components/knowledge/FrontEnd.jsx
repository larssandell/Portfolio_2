import { Box, Container } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import './style.css';

function FrontEnd() {
    return (
        <AnimatePresence>
            <Container
                className='skill'
                sx={{ display: 'flex', gap: 4, flexDirection: 'column' }}
            >
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: '100%',
                        }}
                    >
                        <svg
                            width='70'
                            height='70'
                            viewBox='0 0 256 256'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g id='React-Light' clipPath='url(#clip0_1_65)'>
                                <path
                                    id='Vector'
                                    d='M196 0H60C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H196C229.137 256 256 229.137 256 196V60C256 26.8629 229.137 0 196 0Z'
                                    fill='#F4F2ED'
                                />
                                <path
                                    id='Vector_2'
                                    d='M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z'
                                    fill='#BF5B04'
                                />
                                <path
                                    id='Vector_3'
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z'
                                    stroke='#BF5B04'
                                    strokeWidth='8.911'
                                />
                                <path
                                    id='Vector_4'
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438H94.9811Z'
                                    stroke='#BF5B04'
                                    strokeWidth='8.911'
                                />
                                <path
                                    id='Vector_5'
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z'
                                    stroke='#BF5B04'
                                    strokeWidth='8.911'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_1_65'>
                                    <rect
                                        width='256'
                                        height='256'
                                        fill='white'
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: '100%',
                        }}
                    >
                        <svg
                            width='70'
                            height='70'
                            viewBox='0 0 256 256'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g id='Redux' clipPath='url(#clip0_1_71)'>
                                <path
                                    id='Vector'
                                    d='M196 0H60C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H196C229.137 256 256 229.137 256 196V60C256 26.8629 229.137 0 196 0Z'
                                    fill='#F4F2ED'
                                />
                                <path
                                    id='Vector_2'
                                    d='M166.579 165.599C173.96 164.835 179.559 158.472 179.304 150.837C179.05 143.202 172.687 137.094 165.052 137.094H164.543C156.653 137.348 150.545 143.965 150.799 151.855C151.054 155.673 152.581 158.981 154.871 161.272C146.218 178.324 132.984 190.795 113.132 201.23C99.6432 208.356 85.6452 210.901 71.6472 209.12C60.1944 207.593 51.2866 202.502 45.6874 194.104C37.5431 181.633 36.7796 168.144 43.6513 154.655C48.487 144.983 56.1222 137.857 60.9579 134.294C59.9399 130.986 58.4128 125.386 57.6493 121.314C20.7456 148.038 24.5632 184.178 35.7615 201.23C44.1603 213.955 61.2124 221.845 80.046 221.845C85.1362 221.845 90.2264 221.336 95.3165 220.063C127.894 213.701 152.581 194.358 166.579 165.599Z'
                                    fill='#BF5B04'
                                />
                                <path
                                    id='Vector_3'
                                    d='M211.372 134.04C192.03 111.388 163.525 98.9175 130.948 98.9175H126.876C124.585 94.3363 119.749 91.2822 114.405 91.2822H113.896C106.006 91.5367 99.8977 98.154 100.152 106.044C100.407 113.679 106.769 119.787 114.405 119.787H114.914C120.513 119.533 125.349 115.97 127.385 111.134H131.966C151.308 111.134 169.633 116.733 186.176 127.677C198.901 136.076 208.064 147.02 213.154 160.254C217.481 170.943 217.226 181.378 212.645 190.286C205.519 203.775 193.557 211.156 177.777 211.156C167.597 211.156 157.926 208.102 152.835 205.811C150.036 208.356 144.946 212.428 141.383 214.973C152.326 220.063 163.525 222.863 174.214 222.863C198.647 222.863 216.717 209.374 223.589 195.885C230.97 181.124 230.461 155.673 211.372 134.04Z'
                                    fill='#BF5B04'
                                />
                                <path
                                    id='Vector_4'
                                    d='M82.0822 169.926C82.3367 177.561 88.6994 183.669 96.3347 183.669H96.8437C104.733 183.414 110.842 176.797 110.587 168.907C110.333 161.272 103.97 155.164 96.3347 155.164H95.8256C95.3166 155.164 94.5531 155.164 94.0441 155.419C83.6092 138.112 79.2826 119.278 80.8096 98.9177C81.8277 83.6472 86.9178 70.4127 95.8256 59.4689C103.206 50.0521 117.459 45.4709 127.13 45.2164C154.108 44.7074 165.561 78.3025 166.324 91.7915C169.633 92.555 175.232 94.3365 179.05 95.6091C175.996 54.3787 150.545 33 126.112 33C103.206 33 82.0822 49.543 73.6834 73.9759C61.976 106.553 69.6113 137.857 83.8637 162.545C82.5912 164.326 81.8277 167.126 82.0822 169.926Z'
                                    fill='#BF5B04'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_1_71'>
                                    <rect
                                        width='256'
                                        height='256'
                                        fill='white'
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: '100%',
                        }}
                    >
                        <svg
                            width='70'
                            height='70'
                            viewBox='0 0 256 256'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g id='JavaScript' clipPath='url(#clip0_1_117)'>
                                <path
                                    id='Vector'
                                    d='M196 0H60C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H196C229.137 256 256 229.137 256 196V60C256 26.8629 229.137 0 196 0Z'
                                    fill='#F4F2ED'
                                />
                                <path
                                    id='Vector_2'
                                    d='M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93'
                                    fill='#BF5B04'
                                />
                                <path
                                    id='Vector_3'
                                    d='M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354Z'
                                    fill='#BF5B04'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_1_117'>
                                    <rect
                                        width='256'
                                        height='256'
                                        fill='white'
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: '100%',
                        }}
                    >
                        <svg
                            width='70'
                            height='70'
                            viewBox='0 0 256 256'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g id='Vite-Light' clipPath='url(#clip0_1_142)'>
                                <path
                                    id='Vector'
                                    d='M196 0H60C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H196C229.137 256 256 229.137 256 196V60C256 26.8629 229.137 0 196 0Z'
                                    fill='#F4F2ED'
                                />
                                <path
                                    id='Vector_2'
                                    d='M227.088 57.6016L133.256 225.389C131.318 228.854 126.341 228.874 124.375 225.427L28.6823 57.6177C26.54 53.861 29.7524 49.3105 34.0096 50.0715L127.942 66.8613C128.541 66.9684 129.155 66.9674 129.754 66.8582L221.722 50.0955C225.965 49.3222 229.192 53.8374 227.088 57.6016Z'
                                    fill='#BF5B04'
                                />
                                <path
                                    id='Vector_3'
                                    d='M172.687 28.0492L103.249 41.6554C102.107 41.879 101.262 42.8462 101.194 44.007L96.9221 116.148C96.8216 117.847 98.3821 119.166 100.04 118.783L119.373 114.322C121.182 113.905 122.816 115.498 122.445 117.317L116.701 145.443C116.314 147.336 118.092 148.954 119.94 148.393L131.881 144.765C133.732 144.203 135.511 145.826 135.119 147.721L125.991 191.9C125.42 194.664 129.096 196.171 130.629 193.801L131.653 192.219L188.235 79.2992C189.183 77.4085 187.549 75.2526 185.472 75.6534L165.573 79.494C163.703 79.8545 162.112 78.113 162.639 76.2834L175.628 31.2582C176.156 29.4255 174.559 27.6825 172.687 28.0492Z'
                                    fill='url(#paint0_linear_1_142)'
                                />
                            </g>
                            <defs>
                                <linearGradient
                                    id='paint0_linear_1_142'
                                    x1='122.551'
                                    y1='31.7433'
                                    x2='143.676'
                                    y2='176.66'
                                    gradientUnits='userSpaceOnUse'
                                >
                                    <stop stopColor='#BF5B04' />
                                    <stop offset='1' stopColor='#F4F2ED' />
                                </linearGradient>
                                <clipPath id='clip0_1_142'>
                                    <rect
                                        width='256'
                                        height='256'
                                        fill='white'
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </motion.div>
                </Box>
            </Container>
        </AnimatePresence>
    );
}

export default FrontEnd;
