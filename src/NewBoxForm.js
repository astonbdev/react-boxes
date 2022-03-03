import {useState} from "react";

function NewBoxForm(){
    const [formData, setFormData] = useState({
        height:"",
        width:"",
        backgroundColor:""
    })

    function handleSubmit(){

    }

    return(
        <form action="">
            <label htmlFor="height">Height</label>
            <input type="text" id="height" name="height" />
            <label htmlFor="width">Width</label>
            <input type="text" id="width" name="width" />
            <label htmlFor="backgroundColor">Background Color</label>
            <input type="text" id="background-color" name="backgroundColor" />
            <button type="submit">Add a new box!</button>
        </form>
    )
}