"use strict";
let username = prompt('Github username ?');
const lastCommit = (username) => {
    const URL = `https://api.github.com/users/${username}/events/public`;

    fetch(URL, {headers: {Authorization:`token ${GITHUB_API_KEY}`}}).then((resp => resp.json())).then((data) => {
        let message = `${data[0].actor.login}, Your last commit was ${data[0].created_at.substring(0,10)}.`;
        let commitMsg = `Your commit message was '${data[0].payload.commits[0].message}'`;
        document.getElementById("message").append(message);
        document.getElementById("commit").append(commitMsg);
    });
}
lastCommit(username);

