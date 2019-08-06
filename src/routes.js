import TopPage from "./components/pages/TopPage";
import BookPage from "./components/pages/BookPage";

export default [
    {
        path     : '/',
        name     : 'top',
        component: TopPage
    },
    {
        path     : '/books',
        name     : 'books',
        component: BookPage
    },
];
