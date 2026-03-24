import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const SHORT_ANSWER = "short_answer_question";
const MULTIPLE_CHOICE = "multiple_choice_question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] =
        useState<QuestionType>(SHORT_ANSWER);
    const [message, setMessage] = useState<string>("Short Answer");

    function changeQuestionType(): void {
        if (questionType === SHORT_ANSWER) {
            setQuestionType(MULTIPLE_CHOICE);
            setMessage("Multiple Choice");
        } else {
            setQuestionType(SHORT_ANSWER);
            setMessage("Short Answer");
        }
    }
    //when multiple "Multiple Choice" should be visible
    //when short "Short Answer" should be visible
    //initial type = short answer
    return (
        <div>
            <p>{message}</p>
            <Button onClick={changeQuestionType}>Change Type</Button>

            {questionType === MULTIPLE_CHOICE}
            {questionType === SHORT_ANSWER}
        </div>
    );
}
