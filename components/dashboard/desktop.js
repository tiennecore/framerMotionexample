import React from 'react';
import framerItems from "../utils/framerData";
import Link from "next/link";
import {motion} from "framer-motion"
import FramerSelection from "../framers/framerSelection";

function Desktop() {

    return (
        <div className="grid">
            {framerItems.map((item,index)=>(
                <div className="item" key={index}>
                    <div className="sample">
                        <FramerSelection id={index+1}/>
                    </div>
                    <Link href={`/${item.link}`}>
                        <motion.div
                            whileHover={{ opacity: 1 }}
                            className="info"
                        >
                            <h2>{item.title}</h2>
                            <div className="description">
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Desktop;