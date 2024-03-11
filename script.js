const apiKey = "87158d7cd8d646b681696908fee34aa6";

// const blogContainer = document.getElementById("blog-container");

// async function fetchRandom() {
//   try {
//     // const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apikey=${apiKey}`;
//     const apiURL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=5&apiKey=${apiKey}`;

//     const response = await fetch(apiURL);
//     const data = await response.json();
//     console.log("Successful");
//     return data.articles;
//   } catch (error) {
//     console.error("Error while fetching a random news", error);
//     return [];
//   }
// }

// function displayBlogs(articles) {
//   blogContainer.innerHTML = "";
//   articles.forEach((article) => {
//     const blogCard = document.createElement("div");
//     blogCard.classList.add("blog-card");
//     const img = document.createElement("img");
//     img.src = article.urlToImage;
//     img.alt = article.title;
//     const title = document.createElement("h2");
//     title.textContent = article.title;
//     const description = document.createElement("p");
//     description.textContent = article.description;

//     blogCard.appendChild(img);
//     blogCard.appendChild(title);
//     blogCard.appendChild(description);
//     blogContainer.appendChild(blogCard);
//   });
// }

// (async () => {
//   try {
//     const articles = await fetchRandom();
//     displayBlogs(articles);
//   } catch (error) {
//     console.error(error);
//   }
// })();

document.addEventListener("DOMContentLoaded", function () {
  // Fetch data and update DOM
  fetchRandom()
    .then(displayBlogs)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

async function fetchRandom() {
  try {
    const apiURL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=4&apiKey=${apiKey}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error while fetching data", error);
    throw error;
  }
}

function displayBlogs(articles) {
  const blogContainer = document.getElementById("blog-container");
  blogContainer.innerHTML = "";

  articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = article.title;
    const title = document.createElement("h2");
    title.textContent = article.title;
    const description = document.createElement("p");
    description.textContent = article.description;

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogContainer.appendChild(blogCard);
  });
}
