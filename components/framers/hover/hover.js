import { motion } from "framer-motion";

function Hover() {
    return (
        <div className="framer-container">
            <motion.div
                className="framer-2"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            />
        </div>
    );
}

export default Hover;