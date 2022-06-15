import React from "react";
import { MDBInput } from "mdbreact";

const GameFilter = ({ setFilter }) => {
  return (
    <MDBInput label="Search..." icon="user" 
    onChange={(e) => setFilter(e.target.value)}
    />
  );
}

export default GameFilter;