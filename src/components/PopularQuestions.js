import React, { useState } from "react";
import Button from "./Button";

const getQuestionsPopularity = (list) => {
	let seen = {};
	list.forEach((item) => {
		if (seen[item]) {
			seen[item] += 1;
		} else {
			seen[item] = 1;
		}
	});
	return seen;
};

const PopularQuestions = ({ questionHistory }) => {
	const [showText, setShowText] = useState(false);
	const questionFrequency = getQuestionsPopularity(questionHistory);
	const questionKeys = Object.keys(questionFrequency);
	const handleClick = () => {
		setShowText((showText) => !showText);
	};
	return (
		<div className="popular-question">
			<Button content="view popular questions" handleClick={handleClick} />
			{showText ? (
				<div className="popular-question__text">
					{questionKeys.length ? (
						questionKeys.map((question) => {
							const frequency = questionFrequency[question];
							return (
								<p>
									Question <span className="alert">{question}</span> was asked{" "}
									<span className="alert">{frequency}</span> time
									{frequency > 1 ? "s" : ""}
								</p>
							);
						})
					) : (
						<p>No questions asked yet</p>
					)}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default PopularQuestions;
