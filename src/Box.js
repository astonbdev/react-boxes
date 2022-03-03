
/**
 * Renders Box from Boxlist state
 *
 * props:
 * backgroundColor: background color of box div
 * width: width of box div
 * height: height of box div
 * removeBox: function passed from BoxList parent to update boxlist state
 * key: unique identifier for this box
 *
 * events:
 * -onclick to remove box
 *
 * BoxList -> Box
 */
function Box({backgroundColor, width, height, removeBox, key}){

  const boxStyle = {
    backgroundColor,
    width,
    height
  }

  return(
    <div className="Box-Container" id={key}>
      <div className="Box" style={boxStyle}></div>
      <button className="Box-Cutter" onClick={() => removeBox(key)}>Remove this box!</button>
    </div>
  );
}

export default Box;