// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        const articles = response.data.articles;
        
        for(topic in articles) {
            articles[topic].forEach(item => {
                cardsContainer.append(cardCreator(item));
            })
        }
    })
    .catch(error => {
        alert("there was an issue fetching the data requested.", error);
    })

function cardCreator(article){
    const cardDiv = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgDiv = document.createElement('div'),
          img = document.createElement('img'),
          nameSpan = document.createElement('span');

    cardDiv.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgDiv.classList.add('img-container');
    
    img.src = article.authorPhoto;
    headline.textContent = article.headline;
    nameSpan.textContent = `By: ${article.authorName}`;
    

    cardsContainer.append(cardDiv);
    cardDiv.append(headline, author);    
    author.append(imgDiv, nameSpan);
    imgDiv.append(img);

    return cardDiv;
}


