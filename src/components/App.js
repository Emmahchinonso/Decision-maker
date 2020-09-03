import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Answer from "./Answer";
import PopularQuestions from './PopularQuestions';

const initialChoices = [
	{ value: "", number: 1 },
	{ value: "", number: 2 },
	{ value: "", number: 3 },
	{ value: "", number: 4 },
];

const resetChoices = (choices) => {
	return choices.map((choice) => ({ ...choice, value: "" }));
};

const isChoicesEmpty = (choices) => {
  return choices.some(choice => choice.value === "");
}

function App() {
	const [viewAnswer, setViewAnswer] = useState(false);
	const [choices, setChoices] = useState(initialChoices);
  const [question, setQuestion] = useState("");
  const [questionHistory, setQuestionHistory] = useState([]);
  console.log(questionHistory)

	const handleQuestionChange = (e) => {
		setQuestion(e.target.value.trim());
	};

	const handleChoiceChange = (value, index) => {
		let newChoices = choices.map((choice) => {
			if (choice.number === index) return { ...choice, value: value.trim() };
			return choice;
		});
		setChoices(newChoices);
	};

	const handleAddClick = () => {
		const newChoices = [...choices, { value: "", number: choices.length + 1 }];
		setChoices(newChoices);
	};

	const handleAnswerClick = () => {
    if(isChoicesEmpty(choices) && question){
      setViewAnswer(true);
      setQuestionHistory(questionHistory.concat(question));
    }else{
      alert('Please fill in all empty fields');
    }
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
      <PopularQuestions questionHistory={questionHistory}/>
		</article>
	);
}

export default App;

