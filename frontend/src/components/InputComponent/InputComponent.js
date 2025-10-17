import React, { useState } from "react";
import './InputComponent.css';

const InputComponent = () => {
    const [name, setName] = useState('');

    const InputChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div className="input-component__main">
            <input className="input-component__input"
                type="text"
                id=""
                value={name}
                onChange={InputChange}
                placeholder="Введите название мероприятия"
            />
        </div>
    );
}

export default InputComponent;