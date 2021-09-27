let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  })
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(e => {
      console.log(e)
      let cardDiv = document.createElement('div')
      let classCard = cardDiv.className = 'card'
      document.querySelector('#toy-collection').append()
    })
  })