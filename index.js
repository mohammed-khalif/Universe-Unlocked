function fetchNasa(){ 
fetch('http://localhost:3001/NASA')
      .then((res) => res.json())
      .then((data) =>renderNASA(data));    
      
  

  function renderNASA(data) {
    const div = document.getElementById('card');
    const ul = document.getElementById('NASA');




data.forEach(pictures => {
      const li = document.createElement('li');
      li.classList.add('pointer', 'bold-italic-text');
      li.innerHTML = pictures.title;
ul.appendChild(li)



      const portraitCard = document.createElement("div");
      portraitCard.classList.add('portrait-card');
      portraitCard.innerHTML = `
        <img src="${pictures.poster}" height=500px width=300px/>
        <h2 class="bold-text">${pictures.title}</h2>
        <p class="bold-text">${pictures.description}</p>`;

    // Create a new <p> element to display like button
const like = document.createElement("p");



     // code for the like button
const likeBtn = document.getElementById("likeBtn");
let likes = 0;

likeBtn.addEventListener("click", function() {
  likes++;
  likeBtn.innerHTML = "Liked!";
  likeBtn.style.backgroundColor = "lightgray";
  likeBtn.style.cursor = "not-allowed";
});

//code for the comments section
const commentBtn = document.getElementById("commentBtn");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

commentBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const comment = commentInput.value;
  const li = document.createElement("li");
  li.textContent = comment;
  commentList.appendChild(li);
  commentInput.value = "";
});

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', search);

function search(event) {
  event.preventDefault(); // prevent the default form submission behavior
  const searchInput = document.getElementById('searchInput').value;
  // perform the search using the searchInput value
}

function search(event) {
    event.preventDefault(); // prevent the default form submission behavior
    const searchInput = document.getElementById('searchInput').value;
    
    // perform the search using the searchInput value
    // for example, search for articles containing the search term
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
      if (article.innerText.includes(searchInput)) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  }
  







})};
}


fetchNasa();