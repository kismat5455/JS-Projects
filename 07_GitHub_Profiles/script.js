document.getElementById("search-button").addEventListener("click", function () {
    var username = document.getElementById("search-input").value;

    fetchGithubProfile(username)
        .then(function (profile) {
            console.log(profile);
            if (profile === null || profile.message) {
                var cardContainer = document.getElementById("card-container");
                cardContainer.innerHTML = `<p>User not found</p>`;
            } else {
                var cardContainer = document.getElementById("card-container");
                cardContainer.innerHTML = `
                <div class="card">
                    <img src="${profile.avatar_url}" alt="Profile Picture" width="500" height="500">
                    <div class="card-body">
                        <h2>${profile.login}</h2>
                        <p>${profile.name}</p>
                        <a href="${profile.html_url}">View Profile</a>
                    </div>
                </div>
            `;
            }
        })
        .catch(function (error) {
            var cardContainer = document.getElementById("card-container");
            cardContainer.innerHTML = `
                <div class="card">
                    <p>User not found</p>
                </div>
            `;
        });
});

function fetchGithubProfile(username) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${username}`);
        xhr.setRequestHeader('Accept', 'application/vnd.github.v3+json');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };
        xhr.onerror = function () {
            reject(new Error('Request failed'));
        };
        xhr.send();
    });
}
