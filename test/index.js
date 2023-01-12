import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="like">&lt;3</div>
				<h6>{this.props.text}</h6>
				{this.props.smile}
			</div>
		)
	}
}

const emotions = [
	{smile: " ==)", description :"first"},
	{smile: "=)=", description :"second"},
	{smile: ")==", description :"third"},
	{smile: "(_)", description :"fourth"}
]

ReactDOM.render(
	<div className="wrapper">
		{/* <div className="card">=)</div>
		<div className="card">xD</div>
		<div className="card">^_^</div>
		<div className="card">=-'</div> */}
		{/*v3 */}
		{/* <Card smile="xD" text="why not"/>
		<Card smile="o_O" text="ouch"/>
		<Card smile="(:" text="hey"/>
		<Card smile="=\" text="what"/> */}
		{emotions.map((el,i) => <Card smile={el.smile} text={el.description} key={i}/>)}
	</div>,
	document.querySelector("#root")
)


