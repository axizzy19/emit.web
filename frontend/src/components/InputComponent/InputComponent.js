import React, { useState } from "react";
import './InputComponent.css';

const InputComponent = () => {
    const [Name, setName] = useState('');

    const InputChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div className="Main-Input">
            <input className="Input"
            type="text"
            value={Name}
            onChange={InputChange}
            placeholder="Введите название мероприятия"
            />
        </div>
    );
}

export default InputComponent;