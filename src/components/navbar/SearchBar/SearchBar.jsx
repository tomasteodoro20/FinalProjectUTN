import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  SearchButton,  
  IconMagnifyingGlass
} from "./searchbar.styles";
import { useNavigate } from 'react-router-dom';


function SearchBar() {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  
  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

//   function handleKeyPress(e) {
//     const key = e.key;
//     if (key === "Enter") { 
//     filter && navigate(`/SearchGame:${filter}`);
//     // window.location.reload(false)
// }
// }
  const handleSubmit = (e) => {
    filter ? navigate(`/SearchGame:${filter}`) : e.preventDefault();    
    // window.location.reload(false)
  }

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}      
      onSubmit={handleSubmit}
    >
      <SearchInput ref={targetRef} showSearchInput={showSearchInput} onChange={(e) => setFilter(e.target.value)} />
      {/* onKeyPress={(e) => handleKeyPress(e)} */}
      {showSearchInput ? <SearchButton>➜</SearchButton> : <IconMagnifyingGlass />}
    </Container>
  );
}

export default SearchBar;
