import { Component } from 'react'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState (()=> {
        return {monsters: users}
      }) )
  }

  render () {
    const filterd_monsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })
    return (
      <div className="App">
        <input className='search-box' type="search" placeholder='search monsters' onChange={(event) => {
          const searchField = event.target.value.toLowerCase()
         
          this.setState(() => {
            return {searchField}
          })
        }} />
        
        {
          filterd_monsters.map((monster) => {
            return (
              <div key={monster.id}>
                  <h1>{monster.name}
                  </h1>
              </div>
              )
          })
        }
      </div>
    );
  }
}




export default App;
