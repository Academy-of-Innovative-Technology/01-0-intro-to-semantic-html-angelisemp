const container = document.getElementById("myContainer");

const posts = [
    { image: "https://i.pinimg.com/736x/fc/22/9b/fc229be3e7049e4a14ce9216640140f5.jpg",
      title: "Kali Uchis",
      post: "Kali Uchis is a colombian singer who produces a mix of multiple genres such as, pop, R&B and reggaeton music."
    }
];


posts.forEach(item => {
  const htmlContent = `
    <div class="myContainer">
    <h2>Title: ${item.title}</h2>
      <img src=${item.image}>
      <p>Desc: ${item.post}</p>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", htmlContent);

console.log('Generated HTML for:', item.name);
    console.log(htmlContent);
});