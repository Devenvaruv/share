import React from 'react';
import './Card.css';


class Card extends React.Component {
	render(){
		return (
			<div className='neen2 dib br3 pa3 ma2 dim bw2 shadow-5'>
				<div>
				 <h2>{`${this.props.share_name}`}</h2> 
				 <h2>High = ${this.props.high_state} USD</h2>
				 <h2>Low = ${this.props.low_state} USD</h2>
			    </div>
			</div>




			);
	}
}


export default Card;