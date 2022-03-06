import {motion,AnimatePresence} from "framer-motion"


function Content({item,setIsOpen}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {item.description}
            <AnimatePresence>
                <motion.button onClick={() => setIsOpen(false)} />
            </AnimatePresence>
        </motion.div>
    );
}

export default Content;