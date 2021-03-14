import React from 'react';

const Input = (props) => {
   const {placeholder = "Enter Placeholder text", value, onChange, type = "text", name, } = props;
    return (
        <input
        type="{type}"
        placeholder={placeholder}
        name={name}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    );
}

export default Input;