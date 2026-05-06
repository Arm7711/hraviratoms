import { motion } from "framer-motion";

export default function BlurImage({ src, className, alt = 'image', duration = 2 }) {
    return (
        <motion.img
            src={src}
            className={className}
            alt={alt}
            initial={{
                opacity: 0,
                filter: "blur(14px)",
                scale: 1.1
            }}
            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                scale: 1
            }}
            viewport={{
                once: true,
                amount: 0.3
            }}
            transition={{
                duration,
                ease: [0.22, 1, 0.36, 1]
            }}
            style={{
                width: "100%",
                height: "auto",
                display: "block",
                willChange: "transform, filter, opacity"
            }}
        />
    );
}