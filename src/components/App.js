import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Answer from "./Answer";

const initialChoices = [
	{ value: "", number: 1 },
	{ value: "", number: 2 },
	{ value: "", number: 3 },
	{ value: "", number: 4 },
];

const resetChoices = (choices) => {
	return choices.map((choice) => ({ ...choice, value: "" }));
};

function App() {
	const [viewAnswer, setViewAnswer] = useState(false);
	const [choices, setChoices] = useState(initialChoices);
  const [question, setQuestion] = useState("");
  const [questionHistory, setQuestionHistory] = useState([]);

	const handleQuestionChange = (e) => {
		setQuestion(e.target.value);
	};

	const handleChoiceChange = (value, index) => {
		let newChoices = choices.map((choice) => {
			if (choice.number === index) return { ...choice, value: value };
			return choice;
		});
		setChoices(newChoices);
	};

	const handleAddClick = () => {
		const newChoices = [...choices, { value: "", number: choices.length + 1 }];
		setChoices(newChoices);
	};

	const handleAnswerClick = () => {
    setViewAnswer(true);
    setQuestionHistory(questionHistory.concat(question));
	};

	const resetState = () => {
		setQuestion("");
		setChoices(resetChoices(choices));
  };
  


	return (
		<article className="app">
			<Header />
			{viewAnswer ? (
				<Answer
					question={question}
					choices={choices}
          setViewAnswer={setViewAnswer}
          resetState={resetState}
				/>
			) : (
				<Form
					question={question}
					handleQuestionChange={handleQuestionChange}
					choices={choices}
					handleChoiceChange={handleChoiceChange}
					handleAnswerClick={handleAnswerClick}
					handleAddClick={handleAddClick}
				/>
			)}
		</article>
	);
}

export default App;
