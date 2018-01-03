import React, { Component } from 'react';
import './index.css';
import Toolbar from './components/Toolbar'
import Messages from './components/Messages'
import data from './seeds/Data.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      MessageData:data,
      Starred:data.map(item=>item.starred),
      Selected:data.map(item=>item.selected||false)
    }
  }

  toggleSelectAll = (e) =>{
    let thing = new Array(this.state.Selected.length)

    if(this.state.Selected.includes(false)){
      thing.fill(true)

    }
    else{
      thing.fill(false)
    }

    this.setState({Selected:thing})
  }

  toggleStar = (e,id) =>{
    if(this.state.Starred[id]===true){
      let now = this.state.Starred.slice()
      now[id]=false
    this.setState({Starred:now})
    }
    else{
      let now = this.state.Starred.slice()
      now[id]=true
    this.setState({Starred:now})
    }
  }

  toggleBox = (e, id)=>{

    if(this.state.Selected[id]==true){
      let now=this.state.Selected.slice()
      now[id]=false
      this.setState({Selected:now})
    }
    else{
      let now=this.state.Selected.slice()
      now[id]=true
      this.setState({Selected:now})
    }
  }

  markedRead = (e, id)=>{
    let newDataSet = this.state.MessageData
    this.state.Selected.forEach((email, index)=>{
      if(email==true){
        newDataSet[index]['read']=true
      }
    })
    this.setState({MessageData:newDataSet})
  }

  render() {
    console.log(this.state.Selected);
    return (
      <div className="App container">
        <Toolbar selectSquare={this.state.Selected} selectAll={this.toggleSelectAll.bind(this)} markRead={this.markedRead}/>
        <Messages
           data={this.state.MessageData} toggle={this.toggleStar}
           starred = {this.state.Starred}
           box={this.toggleBox} selected={this.state.Selected}
           />
      </div>
    );
  }
}

export default App;
