import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {background: "yellow",
					  color: "black",
					  border: "none",};

const badgeStyles = {background: "red",
					 color: "white",
					 borderRadius: "50%",};

const Badge = (props) => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};

Badge.propTypes = {label: PropTypes.string,
				   number: PropTypes.string,};


// Dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
