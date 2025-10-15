import React, { useState } from "react";
import './DateComponent.css';

const DateComponent = () => {
    const[date, setDate] = useState('');

    const dateChange = (e) => {
        setDate(e.target.value);
    };

    return(
        <div className="Main">
            <input className="Main_text"
            type="date"
            value={date}
            onChange={dateChange}
            placeholder="Дата мероприятия"
            />
        </div>
    );
}

export default DateComponent