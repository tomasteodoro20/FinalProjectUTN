function Enter(e) {
    if (e.code === "Enter") {
      e.preventDefault();
        let i=document.getElementById("input").value="";
        console.log("buscar: "+i)
     
    }
}

export default Enter;