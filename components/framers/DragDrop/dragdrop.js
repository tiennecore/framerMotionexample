import {useRef} from 'react';
import {motion} from 'framer-motion'

function DragDrop(props) {
    const constraintsRef = useRef(null)

    return (
        <motion.div
            className={"framer-container"}
            ref={constraintsRef}>
            <motion.div
                className="framer-1"
                drag
                dragConstraints={constraintsRef}
                transition={{ type: "spring", stiffness: 200 }}
            />
        </motion.div>
    )
}

export default DragDrop;