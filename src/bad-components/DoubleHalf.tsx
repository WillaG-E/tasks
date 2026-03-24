import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    const double = () => {
        setDhValue(2 * dhValue);
    };
    const halve = () => {
        setDhValue(0.5 * dhValue);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={double}>Double</Button>
            <Button onClick={halve}>Halve</Button>
        </div>
    );
}
