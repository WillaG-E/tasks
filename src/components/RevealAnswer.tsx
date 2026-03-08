import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    //state to handle whether the text is visible
    const [visible, setVisible] = useState<boolean>(false);
    const answerText = 42;
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>

            {visible && answerText}
        </div>
    );
}
