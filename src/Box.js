
/**
 * Renders Box from Boxlist state
 *
 * props:
 * - backgroundColor: background color of box div
 * - width: width of box div
 * - height: height of box div
 * - removeBox: function passed from BoxList parent to update boxlist state
 * - id: unique identifier (uuid) for this box
 *
 * 
 * events:
 * - onclick to remove box
 *
 * BoxList -> Box
 */
function Box({backgroundColor, width, height, removeBox, id}){

  const boxStyle = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`
  }

  return(
    <div className="Box-Container" id={id} key={id} >
      <div className="Box" style={boxStyle}></div>
      <button className="Box-Cutter" onClick={() => removeBox(id)}>Remove this box!</button>
    </div>
  );
}

export default Box;