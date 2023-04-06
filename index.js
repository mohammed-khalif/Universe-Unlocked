function fetchNasa() { 
    fetch('http://localhost:3001/NASA')
        .then((res) => res.json())
        .then((data) => renderNASA(data));    
}

function renderNASA(data) {
    const ul = document.getElementById('NASA');
    ul.innerHTML = "";

    data.forEach(pictures => {
        const li = document.createElement('li');
        li.classList.add('pointer', 'bold-italic-text');
        li.innerHTML = pictures.title;
        ul.appendChild(li);

        const portraitCard = document.createElement("div");
        portraitCard.classList.add('portrait-card');
        portraitCard.innerHTML = `
            <img src="${pictures.poster}" height=500px width=300px/>
            <h2 class="bold-text">${pictures.title}</h2>
            <p class="bold-text hidden">${pictures.description}</p>
            <button class="like-btn">Like</button>
        `;

        const likeBtn = portraitCard.querySelector(".like-btn");
        let likes = 0;

        likeBtn.addEventListener("click", function() {
            likes++;
            likeBtn.innerHTML = `Liked! (${likes})`;
            likeBtn.style.backgroundColor = "lightgray";
            likeBtn.style.cursor = "not-allowed";
        });

        const description = portraitCard.querySelector("p");
        portraitCard.addEventListener("click", function() {
            description.classList.toggle("hidden");
        });

        ul.appendChild(portraitCard);
    });
    
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);

    function search(event) {
        event.preventDefault(); // prevent the default form submission behavior
        const searchInput = document.getElementById('searchInput').value;

        // perform the search using the searchInput value
        // for example, search for articles containing the search term
        const pictures = document.querySelectorAll('.portrait-card');
        pictures.forEach(picture => {
            if (picture.innerText.includes(searchInput)) {
                picture.style.display = 'block';
            } else {
                picture.style.display = 'none';
            }
        });
    }
}

fetchNasa();
