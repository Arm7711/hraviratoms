import { motion } from 'framer-motion';

export default function CurveSvg({ className = 'icon' }) {
    const pathD = "M0.46313359208335214,0.8862884834430815C313.736593828349,164.58858819061732 464.47928473214347,164.58858819061734 452.69120630346674,0.8862884834431952";
    const pathLength = 600; 

    return (
        <svg
            className={className}
            style={{ stroke: 'rgb(114, 90, 63)', fill: 'none', width: '454.332px', height: '124.663px' }}
        >
            <motion.path
                d={pathD}
                strokeLinecap="butt"
                strokeWidth="2"
                fill="none"
                initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength, opacity: 0 }}
                whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            />
        </svg>
    );
}