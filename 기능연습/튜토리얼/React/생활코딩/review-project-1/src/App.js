import React, { Component } from 'react';
// import './App.css';
// import Subject from './Components/Subject';
import Menu from './Components/Menu';
import Contents from './Components/Contents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      welcome: {title: 'Welcome', desc: 'Hello, React !!'},
      subject: {title: 'Welcome', desc: 'This is Main Page !'},
      contents: {title: 'HTML', desc: 'HTML is for making webpages'},
      menu: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for style'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interaction'}
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
      <div id="root">
        {/* <Subject title={this.state.subject.title} desc={this.state.subject.desc}></Subject> */}
        <header>
          <h1><a href="/" onClick={function(event) {
            event.preventDefault();
            this.setState(
              {mode: 'welcome'}
            );
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.desc}
        </header>
        <Menu data={this.state.menu}></Menu>
        <Contents title={_title} desc={_desc}></Contents>
      </div>
    );
  }
}

export default App;
