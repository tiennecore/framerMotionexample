import DragDrop from "./DragDrop/dragdrop";
import Hover from "./hover/hover";

function FramerSelection({id}) {
    switch (id){
        case 1:
            return <DragDrop/>
        case 2:
            return <Hover/>
        case 3:
            return <DragDrop/>
        default:
            return null
    }
}

export default FramerSelection;