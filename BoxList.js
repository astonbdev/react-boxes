import { useState } from "react";
import Box from "./Box";

/**
 * renders boxes and box add form
 */
function BoxList(){
  const [boxList, setBoxList] = useState([]);

  return(
    <div className="BoxList">
      {boxList.map(box => ({
      })
      )}
    </div>
  )
}