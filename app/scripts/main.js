// Grab the left quarter container class, append user data into the user-template ID, do this for the "user" object.
$('.left-quarter').append(_.template($('#user-template').text())(user));

$('.left-quarter').append(_.template($('#org-template').text())(orgs));


repos.forEach(function (repo) {
$('.tab-content-container').append(_.template($('#repo-list-template').text())(repo));
});