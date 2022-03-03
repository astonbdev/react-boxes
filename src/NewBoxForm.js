import {useState} from "react";

/**
 * Renders a form for inputting height, width, and bgColor of a box
 * 
 * Props:
 * - addBox: a callback function to add a box to the box list
 * 
 * State:
 * -FormData: object containing box paramters
 *  - height: height of the box (in px)
 *  - width: width of the box (in px)
 *  - backgroundColor: a valid CSS color
 * 
 * BoxList -> NewBoxForm
 * 
*/
function NewBoxForm({addBox}){
    const initialState = {
        height:"",
        width:"",
        backgroundColor:""
    };

    const [formData, setFormData] = useState(initialState);
    console.log("FORMDATA:", formData);

    function handleChange(evt){
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    function handleSubmit(evt){
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height</label>
            <input onChange={handleChange} type="text" id="height" name="height" value={formData.height}/>
            <label htmlFor="width">Width</label>
            <input onChange={handleChange} type="text" id="width" name="width" value={formData.width} />
            <label htmlFor="backgroundColor">Background Color</label>
            <input onChange={handleChange} type="text" id="background-color" name="backgroundColor" value={formData.backgroundColor} />
            <button type="submit" >Add a new box!</button>
        </form>
    )
}

export default NewBoxForm;