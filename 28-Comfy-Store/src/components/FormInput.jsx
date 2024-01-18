import React from "react";

const FormInput = ({ label, name, type, defaultValue }) => {
    return (
        <div class="form-control">
            <div class="label">
                <span class="label-text capitalize">{label}</span>
            </div>
            <input 
                type={type}
                name={name}
                defaultValue={defaultValue}
                class="input input-bordered"
             />
        </div>
    );
};

export default FormInput;
