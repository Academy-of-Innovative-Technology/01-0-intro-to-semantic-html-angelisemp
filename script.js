const container = document.getElementById("myContainer");

const posts = [
    { image: "https://i.pinimg.com/736x/fc/22/9b/fc229be3e7049e4a14ce9216640140f5.jpg",
      title: "Kali Uchis",
      post: "Kali Uchis is a colombian singer who produces a mix of multiple genres such as, pop, R&B and reggaeton music."
    },
    { image: "https://imageio.forbes.com/blogs-images/ogdenpayne/files/2017/02/Daniel-Caesar-NEw-by-Keith-Henry.jpg?format=jpg&height=600&width=1200&fit=bounds",
      title: "Daniel Caeser",
      post: "Daneil Caeser is a black singer who produces a genre such as, R&B."
    },
    { image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Ariana_Grande_-_Dangerous_Woman_%28Official_Album_Cover%29.png",
      title: "Ariana Grande",
      post: "Ariana Grande is a singer who produces a mix of multiple genres such as, pop, and R&B music."
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