import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: " Analizing Tool For Business Research ",
      act: 0,
      index: "",
      datas: []
    }
  }

  componentDidMount() {
    this.refs.companyName.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    console.log('try');
    

    let datas = this.state.datas;
     let companyName = this.refs.companyName.value;
    let companyInfo = this.refs.companyInfo.value;
    

    if (this.state.act === 0) {
       let data = {
         companyName,
         companyInfo
       }
       datas.push(data);
     } else {
       let index = this.state.index;
       datas[index].companyName = companyName;
       datas[index].companyInfo = companyInfo;
       
     }

    this.setState({
    datas: datas,
    act: 0,
    });

    this.refs.myForm.reset();
    this.refs.companyName.focus();
  };


  fRemove = (i) => {
    let datas = this.state.datas;
    
    datas.splice(i, 1);

    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.companyName.focus();
  };


  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.companyName.value = data.companyName;
    this.refs.companyInfo.value = data.companyInfo;
    

    this.setState({
      act: 1,
      index: i
    });

    this.refs.companyName.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
      <img src="/img/showcase.jpeg" alt=""/>
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="companyName" placeholder="your company name" className="formField" />
          <input type="text" ref="companyInfo" placeholder=" add company info " className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">Add submit </button>
          </form>
        

          <pre>
          {datas.map((data, i) => 
            <li key={i} className="myList">
              {i+1}. {data.companyName}, {data.companyInfo}
              <button onClick={() => this.fRemove(i)} className="myListButton">
                remove </button>
              <button onClick={() => this.fEdit(i)} className="myListButton">
                edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default App;
