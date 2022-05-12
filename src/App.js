import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Card from './components/Card/Card';
import CoverImg from './components/Cover/Cover';
import Footer from './components/Footer/Footer';
import Docu from './components/Docu/Docu';

import './App.css';

// const intialState = {
//   shareNameState: ''
// }

const startingDay = '2022-05-10'
const endingDay = '2022-05-11'
const shareName = 'AAPL'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      shareNameState: '',
      highState: '',
      lowState: '',
      shareNameState2: '',
      highState2: '',
      lowState2: '',
      shareNameState3: '',
      highState3: '',
      lowState3: '',
      shareNameState4: '',
      highState4: '',
      lowState4: '',
      shareNameState5: '',
      highState5: '',
      lowState5: '',
      searchState: ''

    }
  }
  componentDidMount() {
    fetch(`https://api.polygon.io/v2/aggs/ticker/${shareName}/range/1/day/${startingDay}/${endingDay}?adjusted=true&sort=asc&limit=120&apiKey=pjCYHQwFrYUYPTJK8ON_TsqFoqwbIpVc`)
    .then(response => response.json())
    .then(data => this.setState({
      shareNameState: data.ticker,
      highState: data.results[0].h,
      lowState: data.results[0].l,

    }))
    .catch(err => console.error(err))
    .catch(err => console.error('please wait a minute'));
    fetch(`https://api.polygon.io/v2/aggs/ticker/TSLA/range/1/day/${startingDay}/${endingDay}?adjusted=true&sort=asc&limit=120&apiKey=pjCYHQwFrYUYPTJK8ON_TsqFoqwbIpVc`)
    .then(response => response.json())
    .then(data => this.setState({
      shareNameState2: data.ticker,
      highState2: data.results[0].h,
      lowState2: data.results[0].l,

    }))
    .catch(err => console.error(err))
    .catch(err => console.error('please wait a minute'));
    fetch(`https://api.polygon.io/v2/aggs/ticker/AMZN/range/1/day/${startingDay}/${endingDay}?adjusted=true&sort=asc&limit=120&apiKey=pjCYHQwFrYUYPTJK8ON_TsqFoqwbIpVc`)
    .then(response => response.json())
    .then(data => this.setState({
      shareNameState3: data.ticker,
      highState3: data.results[0].h,
      lowState3: data.results[0].l,

    }))
    .catch(err => console.error(err))
    .catch(err => console.error('please wait a minute'));
    fetch(`https://api.polygon.io/v2/aggs/ticker/NFLX/range/1/day/${startingDay}/${endingDay}?adjusted=true&sort=asc&limit=120&apiKey=pjCYHQwFrYUYPTJK8ON_TsqFoqwbIpVc`)
    .then(response => response.json())
    .then(data => this.setState({
      shareNameState4: data.ticker,
      highState4: data.results[0].h,
      lowState4: data.results[0].l,

    }))
    .catch(err => console.error(err))
    .catch(err => console.error('please wait a minute'));
    fetch(`https://api.polygon.io/v2/aggs/ticker/GOOG/range/1/day/${startingDay}/${endingDay}?adjusted=true&sort=asc&limit=120&apiKey=pjCYHQwFrYUYPTJK8ON_TsqFoqwbIpVc`)
    .then(response => response.json())
    .then(data => this.setState({
      shareNameState5: data.ticker,
      highState5: data.results[0].h,
      lowState5: data.results[0].l,

    }))
    .catch(err => console.error(err))
    .catch(err => console.error('please wait a minute'));
  }

  onSearchChange = (event) => {
    this.setState({
      searchState: event.target.value
    })

  }
  render(){
    return (
      <div>
        <Navigation  onSearch={this.onSearchChange}/>
        <CoverImg />
        <Docu />
        <Card 
          share_name={this.state.shareNameState}
          high_state={this.state.highState}
          low_state={this.state.lowState} />
        <Card share_name={this.state.shareNameState2}
          high_state={this.state.highState2}
          low_state={this.state.lowState2} /> 
        <Card share_name={this.state.shareNameState3}
          high_state={this.state.highState3}
          low_state={this.state.lowState3} /> 
        <Card share_name={this.state.shareNameState4}
          high_state={this.state.highState4}
          low_state={this.state.lowState4} /> 
        <Card share_name={this.state.shareNameState5}
          high_state={this.state.highState5}
          low_state={this.state.lowState5} /> 
        <Footer />
      </div>
    )
  }
}

export default App;
