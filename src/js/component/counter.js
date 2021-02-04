import React, { useState } from "react";

const Counter = () => {
	let [counter, setCounter] = useState(0);

	setInterval(() => {
		return setCounter((counter += 1));
	}, 1000);

	return (
		<div className="seconds">
			<p>
				<i className="far fa-clock" />
				00
				{counter}
			</p>
		</div>
	);
};

export default Counter;
