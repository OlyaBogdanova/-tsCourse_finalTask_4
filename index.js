var COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
var getData = function (url) {
    var comments = fetch(url);
    return comments;
};
getData(COMMENTS_URL)
    .then(function (data) { return data.json(); })
    .then(function (res) {
    res.forEach(function (comment) {
        console.log("ID: ".concat(comment.id, ", Email: ").concat(comment.email));
    });
});
