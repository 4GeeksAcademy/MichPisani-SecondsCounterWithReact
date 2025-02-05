import React from "react";
import SecondsCounter from "./counter";

//create your first component
const Home = (props) => {
	return (
		<>
		 <SecondsCounter units={props.units} tens={props.tens} hundreds={props.hundreds} thousands={props.thousands} />
		</>
	);
};

export default Home;
