import React, { useState } from "react";
import Button from "./Button";

function getRandomChoice(arr) {
	let index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

const Answer = ({ question, choices, setViewAnswer, resetState }) => {
	const [chosenChoice, setChoice] = useState(() => getRandomChoice(choices));

	const choiceIndex = chosenChoice.number;

	const handleNewChoice = () => {
		setChoice(getRandomChoice(choices));
	};

	const handleNewQuestion = () => {
		resetState();
		setViewAnswer(false);
	};

	return (
		<section className="answer">
			<h2>{`${question} ?`}</h2>
			<ul className="answer__list">
				{choices.map((choice) => (
					<li
						className={choiceIndex === choice.number ? "choice" : null}
						key={choice.number}
					>
						{choice.value}
					</li>
				))}
			</ul>
			<p>
				Your most likely choice is{" "}
				<span className="choice">{chosenChoice.value}</span>.
			</p>
			<Button content="Generate a new choice" handleClick={handleNewChoice} />
			<Button content="Ask new question" handleClick={handleNewQuestion} />
		</section>
	);
};
export default Answer;
