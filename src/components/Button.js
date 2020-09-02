import React from "react";
const Button = ({ primary, content, handleClick }) => (
	<button
		className={`${primary ? "primary" : ""} btn`}
		onClick={handleClick}
		type="button"
	>
		{content}
	</button>
);

export default Button;
