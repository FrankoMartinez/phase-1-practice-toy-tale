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
  .then(toys => {
      toys.forEach(toy => {
        let cardDiv = document.createElement('div')
        let h2 = document.createElement('h2')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let button = document.createElement('button')

        cardDiv.className = 'card'
        h2.innerText = toy.name
        img.src = toy.image
        img.className = "toy-avatar"
        p.innerText = toy.likes + " Likes"
        button.id = toy.id
        button.className = 'like-btn'
        button.innerText = "Like <3" 
        
        cardDiv.append(h2, img, p, button)
      document.querySelector('#toy-collection').append(cardDiv)
      })
      clickListener()
    })
  })

document.querySelector(".add-toy-form").addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
    body: JSON.stringify({
      "name": e.target.name.value,
      "image": e.target.image.value,
      "likes": 0
    })
  })
  .then(res => res.json())
  .then(toyData => appendToy(toyData))
    function appendToy(resJson) {
      let cardDiv = document.createElement('div')
      let h2 = document.createElement('h2')
      let img = document.createElement('img')
      let p = document.createElement('p')
      let button = document.createElement('button')

      cardDiv.className = 'card'
      h2.innerText = resJson.name
      img.src = resJson.image
      img.className = "toy-avatar"
      p.innerText = resJson.likes + " Likes"
      button.id = resJson.id
      button.className = 'like-btn'
      button.innerText = "Like <3"
      cardDiv.append(h2, img, p, button)

  document.querySelector('#toy-collection').append(cardDiv)
    }
})

function clickListener() {
  const likeButtons = document.querySelectorAll('.like-btn')
  for (const button of likeButtons){
  button.addEventListener('click', (e) => {
    const newNum = parseInt(e.currentTarget.parentNode.querySelector('p').innerText.split(" ")[0]) + 1
    let likes = e.currentTarget.parentNode.querySelector('p')
    e.preventDefault()
    // debugger
    fetch(`http://localhost:3000/toys/${e.currentTarget.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        'likes': newNum
      })
    })
    .then(res => res.json())
      .then(like => {
        console.log(like)
        likes.innerText = `${like.likes} Likes`
      })
    })
  } 
} 