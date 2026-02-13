const fetchData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
//   promise chaining or promise of response
    .then((response) => response.json())
    .then((data) => console.log(data));
};

console.log('This will log before the fetch response is received');

const loadData = () => {
  fetchData();
};

const loadPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => displayPost(data));
};

const displayPost = (posts) => {
  posts.forEach((post) => {
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
    console.log('-------------------');
  });
};



