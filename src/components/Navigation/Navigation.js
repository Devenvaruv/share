import React from 'react';
import './Navigation.css'
import DPlogo from './DPlogo.png';

class Navigation extends React.Component {
	render(){
		return (
			<div>
			  <nav>
				  <ul className='theList'>
				      <li><a href='#'><img src={DPlogo} alt='Company Name' className='logoStyle'/></a></li>
					  <li><a href='#'>home</a></li>
					  <li><a href='#'>about</a></li>
					  <li><a href='#'>contact</a></li>
					   <div className='pushRight'>
					     <li><input placeholder="   search" type="search" className="searchStyle" onChange={this.props.onSearch}/> </li>
                       </div>
			        </ul>
			  </nav>
			</div>

	    )
	}
}



export default Navigation;
