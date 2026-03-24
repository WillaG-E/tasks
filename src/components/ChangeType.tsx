import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    const MULTIPLE = "multiple_choice_question";
    const SHORT = "short_answer_question";

    function changeQuestionType(): void {
        if (questionType === SHORT) {
            setQuestionType(MULTIPLE);
        } else {
            setQuestionType(SHORT);
        }
    }

    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {questionType === MULTIPLE ?
                <span>Multiple Choice</span>
            :   <span>Short Answer</span>}
        </div>
    );
}
