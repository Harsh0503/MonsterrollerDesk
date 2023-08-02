import { useState, useEffect } from 'react';

import Cards from './Component/Cards/Cards-item';

import CardList from './Component/cardList/cardListcomponent';
import SearchBox from './Component/searchBox/searchBoxcomponent';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState('') // [value, setvalue ]
  //  console.log (searchField)

  const [monsters, setMonsters] = useState([])
  // console.log('render')

  useEffect(() => {

    console.log('Effect the fire')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((Users) => setMonsters(Users))

  }, [])



  const onSearchchange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const filterMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  return (
    <div className="App">

      <h1 className='app-title'>Monster Rolodex</h1>

      {/* 
  {filterMonster.map((monster) => {
    return <h1>{monster.name}</h1>
  })} */}

      <SearchBox
        placeholder='Search monsters'
        onChangehandler={onSearchchange}
        className='search-box'
      />
      <CardList monsters={filterMonster} />
    </div>)
}

// class App extends Component {

//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }


//   }

// componentDidMount() {
//   console.log('componentDiMount')
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((Response) => Response.json())
//     .then((Users) =>
//       this.setState(
//         () => {
//           return { monsters: Users };
//         },

//       ))

// }
//   onSearchchange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() {


//     const { monsters, searchField } = this.state;
//     const { onSearchchange } = this;

// const filterMonster = monsters.filter((monster) => {
//   return monster.name.toLocaleLowerCase().includes(searchField)
// })


//     return (
//       <div className="App">

//         <h1 className='app-title'>Monster Rolodex</h1>

// {/* 
//         {filterMonster.map((monster) => {
//           return <h1>{monster.name}</h1>
//         })} */}

//         <SearchBox onChangehandler={onSearchchange} placeholder='Search monsters' className='search-box' />
//         <CardList monsters={filterMonster} />
//       </div>
//     )
//   };
// }

export default App;
