import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import GameFilter from './GameFilter';
import CardsList from '../../cards/CardsList';
import { searchGamesTest } from '../../../constants';
import FilteredList from './FilteredList';
import { searchGameGet } from '../../../constants';
import GameCard from '../../cards/GameCard';
import SearchGame from '../../../pages/Game/SearchGame';


function NuevaSearchBar() {    
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  // const [data, setData] = useState([]);

  // function handleErrors(res) {
  //   if (!res.ok) throw Error(res.status)
  //   return res.json();
  // }

  // useEffect(() => {
  //   fetch(searchGamesTest)
  //     .then(res => handleErrors(res))
  //     .then(data => setData(data.results))
  //     .catch(error => console.log(error))
  // }, [])

  const handleClick = () => {
    return (
    navigate(`/SearchGame:${filter}`)
    )    
  }



  return (
    <>
    <input label="Search..." onChange={(e) => setFilter(e.target.value)}/>    
    <div>    
    {/* {data.filter((game) => {

      if (filter.length === 0){
        return null
      } else if (game.name.toLowerCase().includes(filter.toLocaleLowerCase())) {
        return game
      }      
    })        
        
        } */}
        <button type="submit" onClick={handleClick}>Buscar</button>
        </div>
    {/* <FilteredList data={data} filter={filter}/>     */}
    </>
  )
}

export default NuevaSearchBar


// .map((game) => (
//   <p key={game.id} style={{color:"white"}}>{game.name}</p>
// ))