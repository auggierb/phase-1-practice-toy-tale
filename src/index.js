let addToy = false;
const newCard= document.createElement('div')
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
const get= document.getElementById('toy-collection')
const container = []
document.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/toys',)
  .then((response)=>response.json())
  .then((data)=> get.innerHTML+=`
  <div class='card' id='${data[0].id}'>
  <h2>${data[0].name}</h2>
  <img src='${data[0].image}>'
  </div>`)
  

  addBtn.addEventListener("click", () => {
    

 
    
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
