import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      users:[],
      loading:true,
      searchTerm:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        users:data,
        loading:false,
        searchTerm:''
      })
      console.log(this.state.products)
    })
  }
  searchFunc= (event)=>{
    const searchTerm =event.target.value.toLocaleLowerCase();
    this.setState({searchTerm:searchTerm}) 
    return searchTerm
  }
  render(){
    if(this.state.loading){
      return <h1>Loading......</h1>
    }
      const newUsers=this.state.users.filter(user=>{
      return user.name.toLocaleLowerCase().includes(this.state.searchTerm)
     }) 
    return (
      <div className='App'>
        <h1>List of users</h1>
        <input className='input' type='text' placeholder='Search...'
          onChange={this.searchFunc}
        />  
        {
          newUsers.map((value)=>{
            return <div key={value.id} className='user'>
            <h1 className='value'>{value.name} </h1>
            <h3>{value.email}</h3>
            </div>
          })
        }
      </div>
    )
  }
}
export default App;
