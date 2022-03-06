import {useState} from 'react';
import{motion,AnimatePresence} from "framer-motion";
import Content from "./content";

function Item({item}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={() => setIsOpen(true)} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout >
                {item.title}
            </motion.div>
            {isOpen && <Content item={item} setIsOpen={setIsOpen}/>}
        </motion.li>
    );
}

export default Item;