const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<Response> => {
    const comments = fetch(url);
    return comments;
};
interface Comment {
    id: string;
    email: string;
}
getData(COMMENTS_URL)
    .then((data) => data.json())
    .then((res: Comment[]) => {
        res.forEach((comment) => {
            console.log(`ID: ${comment.id}, Email: ${comment.email}`);
        });
    });
