import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import {useState} from "react";

function NewBoxForm({addBox}){
    const [formData, setFormData] = useState({
        height:"",
        width:"",
        backgroundColor:""
    });

    function handleSubmit(evt){
        evt.preventDefault();

        setFormData(currData => (
            {...currData,
                width: evt.target.getElementById("width").value,
                height: evt.target.getElementById("height").value,
                backgroundColor: evt.target.getElementById("background-color").value
            }));

        addBox(() => formData);
    }

    return(
        <form action=""
              onSubmit={handleSubmit}>
            <label htmlFor="height">Height</label>
            <input type="text" id="height" name="height" />
            <label htmlFor="width">Width</label>
            <input type="text" id="width" name="width" />
            <label htmlFor="backgroundColor">Background Color</label>
            <input type="text" id="background-color" name="backgroundColor" />
            <button type="submit" >Add a new box!</button>
        </form>
    )
}