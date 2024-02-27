const apikey = "52089abbf107400b93ea83320e00f3fd";

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apikey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles; // Changed variable name to 'articles'
  } catch (error) {
    console.error("Error fetching News ", error);
    return [];
  }
}

function displayBlogs(articles) {
  // Changed variable name to 'articles'
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

(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);
  } catch (error) {
    console.error("Error", error);
  }
})();
