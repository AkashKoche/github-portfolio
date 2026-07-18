import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export const fetchUser = async (username) => {
  const { data } = await octokit.request("GET /users/{username}", {
    username,
  });
  return data;
};

export const fetchRepos = async (username) => {
  const { data } = await octokit.request("GET /users/{username}/repos", {
    username,
    per_page: 100,
    sort: "updated",
  });
  return data;
};

export const fetchEvents = async (username) => {
  const { data } = await octokit.request("GET /users/{username}/events", {
    username,
    per_page: 30,
  });
  return data;
};
