import React, {useState, useEffect} from 'react';
import GameFilter from './GameFilter';
import CardsList from '../../cards/CardsList';
import { searchGamesTest } from '../../../constants';
import FilteredList from './FilteredList';
import { searchGameGet } from '../../../constants';


function NuevaSearchBar() {    
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  function handleErrors(res) {
    if (!res.ok) throw Error(res.status)
    return res.json();
  }

  useEffect(() => {
    fetch(searchGameGet(filter))
      .then(res => handleErrors(res))
      .then(data => setData(data.results))
      .catch(error => console.log(error))
  }, [])



  return (
    <>
    <GameFilter setFilter={setFilter}/>
    <FilteredList data={data} filter={filter}/>    
    </>
  )
}

export default NuevaSearchBar
