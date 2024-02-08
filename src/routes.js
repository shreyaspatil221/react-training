import Home from "./components/Home";
import Login from "./components/Login";
import UserList from "./components/UsersList";

const routes = [
    {
        name: 'Home',
        path: '/',
        element: <Home />
    },
    {
        name: 'Login',
        path: '/login',
        element: <Login />
    },
    {
        name: 'UserList',
        path: '/userlist',
        element: <UserList />
    }
];

export default routes;