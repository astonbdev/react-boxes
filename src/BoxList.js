import { useState } from "react";
import {v4 as uuid} from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"

/**
 * renders boxes and box add form
 */
function BoxList(){
  const [boxList, setBoxList] = useState([]);

  function addBox(){

  }
  
  function removeBox(){

  }
  
  return(
    
      <div className="BoxList">
        <NewBoxForm />
      {boxList.map(box => (
        <Box 
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          removeBox={removeBox}
          key={uuid()}
        />
        )
      )}
    </div>


    
  )
}