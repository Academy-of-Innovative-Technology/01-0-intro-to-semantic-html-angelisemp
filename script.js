let main1 = document.getElementById("one");

const posts = [
    { image: "",
      title: "",
      post: ""
    }
]

const container = document.getElementbyID("myContainer");

posts.forEach(obj => {
  const htmlString = `
    <div class="person-card">
      <h3>${obj.name}</h3>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", htmlString);
});