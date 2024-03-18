const apiKey = "c77e66952b594d019c0f30c90dc72d5b";
const blogContainer = document.getElementById("blogContainer");
const searchField = document.getElementById("searchField");
const searchButton = document.getElementById("searchButton");

async function fetchRandomNews() {
  try {
    const apiURL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=20&apiKey=${apiKey}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching API", error);
    return [];
  }
}

searchButton.addEventListener("click", async () => {
  const query = searchField.value.trim();
  console.log(query);
  if (query !== "") {
    try {
      const articles = await fetchQuery(query);
      displayBlogs(articles);
    } catch (error) {
      console.error("Error fetching query", error);
    }
  }
});

async function fetchQuery(query) {
  try {
    const apiURL = `https://newsapi.org/v2/everything?q=${query}&pageSize=50&apiKey=${apiKey}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching API", error);
    return [];
  }
}

function displayBlogs(articles) {
  blogContainer.innerHTML = "";

  articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blogCard");

    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = article.title;

    const title = document.createElement("h2");
    const truncatedTitle =
      article.title.length > 40
        ? article.title.slice(0, 40) + "... "
        : article.title;
    title.textContent = truncatedTitle;

    const description = document.createElement("p");
    const truncatedDesc =
      article.description.length > 100
        ? article.description.slice(0, 100) + "... "
        : article.description;
    description.textContent = truncatedDesc;

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogCard.addEventListener("click", () => {
      window.open(article.url);
      ("_blank");
    });
    blogContainer.appendChild(blogCard);
  });
}

(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);
  } catch (error) {
    console.error("Error fetching news", error);
  }
})();
