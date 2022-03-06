import React from 'react';
import framerItems from "../components/utils/framerData";
import FramerSelection from "../components/framers/framerSelection";

export async function getStaticPaths(){
    const paths = framerItems.map((element) => {
        return{
            params:{framer: element.link}
        }
    })
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps(context) {
    const framer = context.params.framer
    const data = framerItems.find(element => element.link === framer)
    return {
        props: {element : data}, // will be passed to the page component as props
    }
}
function Framer({element}) {
    return(
        <>
            <header></header>
            <main>
                <div>
                    <h1>{element.title}</h1>
                </div>
                <div className="motion-container">
                    <FramerSelection id={element.id}/>
                </div>

            </main>

        </>

)
;
}

export default Framer;