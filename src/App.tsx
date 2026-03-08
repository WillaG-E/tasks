import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>This is heading text.</h1>
            <hr></hr>
            <p>
                Counter 1: <Counter></Counter>
            </p>
            <p>
                Counter 2: <Counter></Counter>
            </p>
            <p>
                Counter 3: <Counter></Counter>
            </p>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr></hr>
            <p>Hello World</p>
            <img
                src="src/Poppies.jpg"
                alt="A picture of a field of red poppies"
            />
            <p>Willa Galipeau-Eldridge</p>
            <ul>
                <li>Lupine</li>
                <li>Aster</li>
                <li>Daisy</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
