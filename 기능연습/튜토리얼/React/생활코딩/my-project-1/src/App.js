import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import Menu from './components/Menu';
import Contents from './components/Contents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: {title: 'Welcome', desc: 'Hello, React !!'},
      subject1: {title:'WEB', text:'World Wide Web!'},
      subject2: {title:'React', text:'For UI'},
      contents: {title:'HTML', desc:'HTML is HyperText Markup Language.'},
      menu: [
        {id: 1, title: 'HTML', desc:'HTML is for information'},
        {id: 2, title: 'CSS', desc:'CSS is for design'},
        {id: 3, title: 'JavaScript', desc:'JavaScript is for interaction'},
      ]
    }
  }
  render() {
    let _title, _desc;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.menu[0].title;
      _desc = this.state.menu[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject title={this.state.subject1.title} text={this.state.subject1.text}></Subject> */}
        <header>
          <h1><a href="/" onClick={function(event){
            event.preventDefault();
            alert('hi');
          }}>{this.state.subject1.title}</a></h1>
          {this.state.subject1.text}
        </header>
        {/* <Subject title={this.state.subject2.title} text={this.state.subject2.text}></Subject> */}
        <Menu data={this.state.menu}></Menu>
        <Contents title={_title} desc={_desc}></Contents>
      </div>
    )
  }
}

export default App;
