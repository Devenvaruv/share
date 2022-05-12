import React from 'react';
import './Docu.css';



class Docu extends React.Component {
	render(){
		return (
			<div className='theDiv'>
			 <h1>{`Document`}</h1>
			 <p className='thePar'>{`A stock (also known as equity) is a security that represents the ownership of a fraction of a corporation. This entitles the owner of the stock to a proportion of the corporation's assets and profits equal to how much stock they own. Units of stock are called "shares."

Stocks are bought and sold predominantly on stock exchanges (though there can be private sales as well) and are the foundation of many individual investors' portfolios. These transactions have to conform to government regulations that are meant to protect investors from fraudulent practices. Historically, they have outperformed most other investments over the long run. These investments can be purchased from most online stockbrokers.`}</p>
            <p className='thePar'>{`WHOA hold up!! what does this mean?`}</p>
            <p className='thePar'>{`Well in simple language a share means you own a part of a particular company.`}</p>
            <p className='thePar'>{`Just like buying things in real life or online you purchase something and you own it. In the same way you buy a part of a company and you own that much portion of that company.`}</p>
            <p className='thePar'>{`Will I be the owner if I buy all the shares of a company?`}</p>
            <p className='thePar'>{`Yes elon you will.`}</p>
            <p className='thePar'>{`ok we understand what shares are but how do I read them?`}</p>
            <p className='thePar'>{`well try to read them from below`}</p>
			</div>    
		);
	}
}


export default Docu;