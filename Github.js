let main = document.querySelector("main");

let box1 = document.querySelector(".box1");

let imagine = document.querySelector(".imagine");

let input = document.querySelector("#search");

let title = document.querySelector(".title");

let idd = document.querySelector(".idd");

let git = document.querySelector(".git")

let span = document.querySelector(".span")

let sp = document.querySelector(".sp")

let ip = document.querySelector(".ip")

let Repo = document.querySelector(".Repo")

let box2 = document.querySelector("maincontent")

let searcher = document.querySelector("#glow")

input.addEventListener("click", fd)

searcher.addEventListener('keydown', press);

function press(event) {
  if (event.key == "Enter") {
    fd();
    return;
  }
}

searcher.addEventListener("input", () => {
  if (searcher.value.trim() !== "") {
    fd();
    return;
  }
});

async function fd() {

  let username = searcher.value;
  const url = `https://api.github.com/users/${username}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    imagine.src = data.avatar_url;
    title.innerHTML = data.login;
    idd.innerHTML = data.node_id;
    git.href = data.html_url;
    git.innerHTML = data.html_url;
    span.innerHTML = `Followers = ${data.followers}`;
    sp.innerHTML = `|  Following = ${data.following}`;
    ip.innerHTML = `| ID = ${data.id}`;
    Repo.innerHTML = `| Repositries = ${data.public_repos}`;

  } catch (error) {
    console.log(error);
    console.log("bye");
  }
}

