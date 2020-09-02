import React from "react";

export const Label = ({ content, to }) => {
	return <label className="form__label" htmlFor={to ? to : null}>{content}</label>;
};

export const InputBox = ({ number, value, handleChange }) => {
	return (
		<input
      value={value}
			placeholder={`choice ${number}`}
      className="form__input"
      onChange={(e) => handleChange(e.target.value, number)}
		/>
	);
};
