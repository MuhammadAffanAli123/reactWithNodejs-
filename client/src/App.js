import React, { Component } from 'react'
import './App.css'
export class App extends Component {
  constructor(){
    super()
    this.state={
      text:"" ,
      array:[],
    }
  }

  handlesubmit = (e)=>{
    e.preventDefault();
  //  const url = "http://localhost:5000/sent";
    var data = new URLSearchParams();
     for(const pair of new FormData(e.target)){
         // console.log(pair)
       data.append(pair[0],pair[1])
     }
    fetch('/sent',{
        method:"post",
        body:data,
       
    }).then(res=>res.json())
    .then(res2 => {
        console.log(res2)
        window.location.reload()
    }); 

  }

  async  componentDidMount() {
    var data =  await   fetch("/data")
    var res= await data.json()
    console.log(res,"@@@@@@@@@@@@@!!!!!1111")
  this.setState({
    array:res
  }) 
  }
 
  render() {
    const {array}=this.state
    return (
      <div className="App">
        <form  onSubmit={(e)=>{this.handlesubmit(e)}}>
 
        <input type="text" 
        name="item"
        onChange={(e)=>{
          this.setState({
            text: e.target.value
          })
        }}
        value={this.state.text}
        />
        <button type="submit">submit</button>
        </form>
        {
          this.state.array.map((item ,  index)=>{
            console.log(item )
          return<li  key={item._id}>{item.wish}
      
          <button>delete</button>
          </li>
          })
        }      
      </div>
    )
  }
}

export default App
