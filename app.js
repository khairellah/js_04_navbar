// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", ()=>{
    //get all classlist of element<
    //console.log(links.classList);
    // check if element contains a class colled show-links => boolean
    //console.log(links.classList.contains("show-links"));

    /* 
    Old way to remove or add a classe into an element 
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }
    else{
        links.classList.add("show-links")}
    */
   links.classList.toggle("show-links");
})