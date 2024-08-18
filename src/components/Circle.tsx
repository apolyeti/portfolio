import { motion } from 'framer-motion';

export default function Circle() {
    return (
        <motion.svg 
            width="500px" 
            height="500px" 
            viewBox="0 0 160 160" 
            className="z-20"
        >
            <defs>
                <g id="lines" style={{ stroke: "black" }}>
                    <line x1=" 71" x2=" 79" />
                    <line x1="-71" x2="-79" />
                    <line y1=" 71" y2=" 79" />
                    <line y1="-71" y2="-79" />
                </g>
            </defs>
            <motion.g 
                transform="translate(80 80)"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                <motion.use xlinkHref="#lines" transform="rotate( 0)" />
                <motion.use xlinkHref="#lines" transform="rotate( 5)" />
                <motion.use xlinkHref="#lines" transform="rotate(10)" />
                <motion.use xlinkHref="#lines" transform="rotate(15)" />
                <motion.use xlinkHref="#lines" transform="rotate(20)" />
                <motion.use xlinkHref="#lines" transform="rotate(25)" />
                <motion.use xlinkHref="#lines" transform="rotate(30)" />
                <motion.use xlinkHref="#lines" transform="rotate(35)" />
                <motion.use xlinkHref="#lines" transform="rotate(40)" />
                <motion.use xlinkHref="#lines" transform="rotate(45)" />
                <motion.use xlinkHref="#lines" transform="rotate(50)" />
                <motion.use xlinkHref="#lines" transform="rotate(55)" />
                <motion.use xlinkHref="#lines" transform="rotate(60)" />
                <motion.use xlinkHref="#lines" transform="rotate(65)" />
                <motion.use xlinkHref="#lines" transform="rotate(70)" />
                <motion.use xlinkHref="#lines" transform="rotate(75)" />
                <motion.use xlinkHref="#lines" transform="rotate(80)" />
                <motion.use xlinkHref="#lines" transform="rotate(85)" />
            </motion.g>
        </motion.svg>
    )
}
