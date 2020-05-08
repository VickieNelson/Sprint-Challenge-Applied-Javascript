// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

//Pseudo code

//axios

//response.data.articles  within here, we have 5 arrays filled with objects. Each array corresponds with a topic.

//articles is itself an object. we've got bootstrap, javascript, jquery, node, technology as arrays with arrays inside

//i think we'll be doing something like this? response.data.articles.bootstrap, as an example. Bootstrap is an array with 3 articles, each article object has a headline, authorPhoto and authorName

//should have a total of 15 articles

//probably want to do Object.entries. so first const articleEntries = Object.entries(articles); and then we can do articleEntries.forEach

//deconstruct Article Object using Object.entries and .forEach method on its values, which happen to be the arrays that were matched with topic keys.

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then((heorkuData) => {
    console.log(heorkuData);

    const articles = heorkuData.data.articles;
    const cards = document.querySelector(".cards-container");
    console.log(articles);

    //foreach
    articles.bootstrap.forEach((card) => {
      cards.appendChild(
        createCards(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.javascript.forEach((card) => {
      cards.appendChild(
        createCards(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.jquery.forEach((card) => {
      cards.appendChild(
        createCards(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.node.forEach((card) => {
      cards.appendChild(
        createCards(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.technology.forEach((card) => {
      cards.appendChild(
        createCards(card.headline, card.authorPhoto, card.authorName)
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

function createCards(headline, authorImage, authorName) {
  //variables
  const card = document.createElement("div");
  const articleHeadline = document.createElement("div");
  const author = document.createElement("div");
  const imgContain = document.createElement("div");
  const authorImg = document.createElement("img");
  const byAuthor = document.createElement("span");

  //classes
  card.classList.add("card");
  articleHeadline.classList.add("headline");
  author.classList.add("author");
  imgContain.classList.add("img-container");

  //content
  articleHeadline.textContent = headline;
  authorImg.setAttribute("src", authorImage);
  byAuthor.textContent = `By ${authorName}`;

  //appendchild
  card.appendChild(articleHeadline);
  card.appendChild(author);
  author.appendChild(imgContain);
  imgContain.appendChild(authorImg);
  author.appendChild(byAuthor);

  return card;
}
