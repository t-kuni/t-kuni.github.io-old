import TopPage from "./components/pages/TopPage";
import BookPage from "./components/pages/BookPage";
import ProductPage from "./components/pages/ProductPage";
import SkillPage from "./components/pages/SkillPage";
import ProductListPage from "./components/pages/ProductListPage";

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
    {
        path     : '/products',
        name     : 'products',
        component: ProductListPage
    },
    {
        path     : '/products/:permalink',
        name     : 'product',
        component: ProductPage
    },
    {
        path     : '/skills',
        name     : 'skills',
        component: SkillPage
    },
];
