    const blogPosts = [
  {
    title: "Solar Project on Saibai Island",
    slug: "solar-project",
    summary: "How I built a solar-diesel hybrid microgrid for a remote island.",
    date: "2025-06-20",
    views: 220,
    tags: ["solar", "energy", "microgrid"],
    thumbnail: "images/porject/solar1.gif",
    file: "posts/solar-project.md"
  },
  {
    title: "Solar Project on Saibai Island",
    slug: "solar-project",
    summary: "How I built a solar-diesel hybrid microgrid for a remote island.",
    date: "2025-06-20",
    views: 220,
    tags: ["solar", "energy", "microgrid"],
    thumbnail: "images/porject/solar1.gif",
    file: "posts/solar-project.md"
  },
  {
    title: "Solar Project on Saibai Island",
    slug: "solar-project",
    summary: "How I built a solar-diesel hybrid microgrid for a remote island.",
    date: "2025-06-20",
    views: 220,
    tags: ["solar", "energy", "microgrid"],
    thumbnail: "images/porject/solar1.gif",
    file: "posts/solar-project.md"
  },
  {
    title: "Solar Project on Saibai Island",
    slug: "solar-project",
    summary: "How I built a solar-diesel hybrid microgrid for a remote island.",
    date: "2025-06-20",
    views: 220,
    tags: ["solar", "energy", "microgrid"],
    thumbnail: "images/porject/solar1.gif",
    file: "posts/solar-project.md"
  },
  {
    title: "Getting Started with ESP32",
    slug: "esp32-intro",
    summary: "A beginner-friendly guide to ESP32 with Wi-Fi and Bluetooth.",
    date: "2025-06-21",
    views: 310,
    tags: ["embedded", "ESP32", "iot"],
    thumbnail: "images/esp32.jpg",
    file: "posts/esp32-intro.md"
  },
  {
    title: "Autonomous Farming with AI",
    slug: "future-farming",
    summary: "How AI and sensors helped boost yields and save water.",
    date: "2025-06-22",
    views: 270,
    tags: ["ai", "farming", "iot"],
    thumbnail: "images/farm.jpg",
    file: "posts/future-farming.md"
  }
];

    function renderBlogs(postsToRender) {
  const container = document.getElementById("blog-section");
  container.innerHTML = "";

  postsToRender.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <div class="card-glow"></div>
      <img src="${post.thumbnail}" alt="${post.title}" class="blog-thumbnail">
      <div class="blog-content">
        <h3>${post.title}</h3>
        <p class="blog-summary">${post.summary}</p>
        <p class="blog-meta">${post.date} • ${post.views} views</p>
        <a href="blogview.html?slug=${post.slug}" class="blog-readmore">Read More →</a>
      </div>
    `;
    container.appendChild(card);
  });
}

function loadBlogList() {
  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  renderBlogs(blogPosts);

  // Popular section remains unchanged...
}
// document.getElementById("blog-search").addEventListener("input", function () {
//   const keyword = this.value.toLowerCase();
//   const filtered = blogPosts.filter(post =>
//     post.title.toLowerCase().includes(keyword) ||
//     post.summary.toLowerCase().includes(keyword) ||
//     post.tags.join(' ').toLowerCase().includes(keyword)
//   );
//   renderBlogs(filtered);
// });
document.getElementById("blog-search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = blogPosts.filter(post =>
    post.title.toLowerCase().includes(keyword) ||
    post.summary.toLowerCase().includes(keyword) ||
    post.tags.join(' ').toLowerCase().includes(keyword)
  );

  if (filtered.length > 0) {
    renderBlogs(filtered);
    document.getElementById("no-results").style.display = "none";
  } else {
    renderBlogs([]); // optionally clear existing content
    document.getElementById("no-results").style.display = "block";
  }
});

function renderTags() {
  const tagBox = document.getElementById("tag-filter");
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  allTags.forEach(tag => {
    const btn = document.createElement("button");
    btn.textContent = `#${tag}`;
    btn.className = "tag-button";
    btn.onclick = () => {
      const filtered = blogPosts.filter(post => post.tags.includes(tag));
      renderBlogs(filtered);
    };
    tagBox.appendChild(btn);
  });
}
renderTags();
const storedViews = JSON.parse(localStorage.getItem('views')) || {};
storedViews[slug] = (storedViews[slug] || 0) + 1;
localStorage.setItem('views', JSON.stringify(storedViews));

// Sync back into blogPosts array if needed
if (post) post.views = storedViews[slug];
   var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX +"px; top: " + e.clientY +"px;";
    });
    document.addEventListener('click',() => {
        cursor.classList.add("expand");
        setTimeout(()=>{
            cursor.classList.remove("expand");
        },500)
    })
    document.addEventListener('click',() => {
        cursor2.classList.add("expand");
        setTimeout(()=>{
            cursor2.classList.remove("expand");
        },500)
    })
