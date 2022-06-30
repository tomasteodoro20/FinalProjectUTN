import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  IconRightArrow,
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

  function handleKeyPress(e) {
    var key = e.key;
    if (key === "Enter") {    
    filter && navigate(`/SearchGame:${filter}`);    
    window.location.reload(false)
}
  }
  
  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  const handleClick = () => {
    filter && navigate(`/SearchGame:${filter}`);    
    window.location.reload(false)
    // navigate("")
        
  }

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}      
    >
      <SearchInput ref={targetRef} showSearchInput={showSearchInput} onChange={(e) => setFilter(e.target.value)} onKeyPress={(e) => handleKeyPress(e)}/>
      {showSearchInput ? <IconRightArrow onClick={handleClick} /> : <IconMagnifyingGlass />}
    </Container>
  );
}

export default SearchBar;
