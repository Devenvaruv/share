import React from 'react';
import './Cover.css';
import Cover from './Cover.jpg';
import TypeWriterEffect from 'react-typewriter-effect';


class CoverImg extends React.Component {
	render(){
		return (
			<div>
			<div className='coverFlex'>
			  <div>
			  <h1 className='text1'>{`Confused How shares Works?`}</h1>
			  <h1 className='text1'>{`All those funny numbers and signs?`}</h1>
			  </div>
			  <img className="cover center" src={Cover} alt="background img guy girl confused"/>
			  <TypeWriterEffect className='item'
		                startDelay={2000}
			            cursorColor="black"
			            text="So am I."
			            typeSpeed={100}
                     />
			</div>
			  <div className='textFlex'>
				   <TypeWriterEffect
				        className='justShadow'
		                startDelay={5500}
			            cursorColor="white"
			            text="But don't worry we can go through it together"
			            typeSpeed={40}
                     />
                     <TypeWriterEffect
		                startDelay={9000}
			            cursorColor="white"
			            text=",I think"
			            typeSpeed={40}
			            className='justShadow'
                     />
                     <TypeWriterEffect
		                startDelay={10000}
			            cursorColor="white"
			            text="?"
			            typeSpeed={40}
			            className='justShadow'
                     />
                    </div>
			    <TypeWriterEffect
		                startDelay={12000}
			            cursorColor="white"
			            text="Anyways lets get started"
			            typeSpeed={40}
			            className='justShadow'
                     />
                     <TypeWriterEffect
		                startDelay={14000}
			            cursorColor="white"
			            text="Given below is the documentation which I made according to my understanding."
			            typeSpeed={40}
			            className='justShadow'
                     />
			</div>    




			);
	}
}


export default CoverImg;