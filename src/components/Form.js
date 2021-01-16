import React from "react";
import { Label, InputBox } from "./Input";
import Button from "./Button";

const Form = ({
	question,
	handleQuestionChange,
	choices,
	handleChoiceChange,
	handleAddClick,
	handleAnswerClick,
}) => {
	return (
		<form className="form">
			<div className="form__question">
				<Label content="Your question here" to="question" />
				<input
					value={question}
					id="question"
					className="form__input"
					onChange={handleQuestionChange}
					placeholder="e.g What course do i study"
				/>
			</div>
			<div className="form__choices">
				<Label content="Enter your choices" />
				{choices.map((choice) => (
					<InputBox
						number={choice.number}
						key={choice.number}
						value={choice.value}
						handleChange={handleChoiceChange}
					/>
				))}
			</div>
			<div className="form__buttons">
				<Button content="Add new choice" handleClick={handleAddClick} />
				<Button primary content="Get Answer" handleClick={handleAnswerClick} />
			</div>
		</form>
	);
};
export default Form;
