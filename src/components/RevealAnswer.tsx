import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    const answer = 42;

    function revealAnswer(): void {
        setVisible(visible);
    }

    return (
        <div>
            <Button onClick={revealAnswer}>Reveal Answer</Button>
            {visible && answer}
        </div>
    );
}
