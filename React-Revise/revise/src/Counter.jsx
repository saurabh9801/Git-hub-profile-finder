import React, { useState, cloneElement } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(prev => prev + 1);
    }

    const element = <button onClick={handleClick}>Click Me</button>;

    const clonedElement = cloneElement(element, {
        className: "btn-primary"
    });

    return (
        <>
            <h4>{count}</h4>
            {clonedElement}
        </>
    );
}