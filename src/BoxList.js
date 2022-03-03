import { useState } from "react";
import {v4 as uuid} from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"

/**
 * renders boxes and box add form, manages state of box list
 * 
 * Props:
 * none
 * 
 * State:
 * - boxList: array containing objects with box parameters, like:
 * [{width, height, backgroundColor, id},...]
 * 
 * App -> BoxList -> NewBoxForm, Box
 */
function BoxList(){
  const [boxList, setBoxList] = useState([]);

  function addBox(formData){
    let newBox = {...formData, id:uuid()}
    setBoxList(boxList => [newBox,...boxList]);
  }

  function removeBox(id){
    setBoxList(boxList => boxList.filter(box => (box.id !== id)));
  }
  
  return(
    
      <div className="BoxList">
        <NewBoxForm addBox={addBox} />
      {boxList.map(box => (
        <Box 
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          removeBox={removeBox}
          id={box.id}
          key={box.id}
        />
        )
      )}
    </div>


    
  )
}

export default BoxList;