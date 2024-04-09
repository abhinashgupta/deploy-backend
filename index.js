// console.log("hello")
require("dotenv").config();
const express = require("express");
const app = express();

const port = 3000;

const github = {
        login: "abhinashgupta",
        id: 119418841,
        node_id: "U_kgDOBx4v2Q",
        avatar_url: "https://avatars.githubusercontent.com/u/119418841?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abhinashgupta",
        html_url: "https://github.com/abhinashgupta",
        followers_url: "https://api.github.com/users/abhinashgupta/followers",
        following_url:
          "https://api.github.com/users/abhinashgupta/following{/other_user}",
        gists_url: "https://api.github.com/users/abhinashgupta/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abhinashgupta/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abhinashgupta/subscriptions",
        organizations_url: "https://api.github.com/users/abhinashgupta/orgs",
        repos_url: "https://api.github.com/users/abhinashgupta/repos",
        events_url:
          "https://api.github.com/users/abhinashgupta/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abhinashgupta/received_events",
        type: "User",
        site_admin: false,
        name: "Abhinash Gupta",
        company: null,
        blog: "",
        location: "Bhopal",
        email: null,
        hireable: true,
        bio: "👋 Welcome to my GitHub profile! I'm a passionate  full stack web developer with expertise in a wide range of technologies. ",
        twitter_username: null,
        public_repos: 18,
        public_gists: 0,
        followers: 0,
        following: 1,
        created_at: "2022-11-29T12:11:43Z",
        updated_at: "2024-03-17T12:28:10Z",
      }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("abhinashgupta1822@twitter.com")
})

app.get("/login", (req, res) => {
    res.send("<h1>User loggin successfully</h1>")
})

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.get("/github", (req, res) => {
  res.json(github);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});