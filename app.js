const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const fetchPost = async () => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`
  );
  let posts = await response.json();
  posts.map((post) => {
    let htmlElem = ` <div class="post">
      <div class="post-id">${postCount++}</div>
      <h3 class="post-title">${post.title}</h3>
      <div class="post-body">
        ${post.body}
      </div>
    </div>`;
    container.insertAdjacentHTML("beforeend", htmlElem);
  });
};

fetchPost();

const showData = () => {
  setTimeout(() => {
    pageCount++;
    fetchPost();
  });
};
window.addEventListener("scroll", () => {
  let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 1) {
    console.log("Scrollbar is at bottom"); // for debugging
    showData();
  }
});
