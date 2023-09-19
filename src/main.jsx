import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Comments from './components/Comments/Comments';
import CommentDetails from './components/Comments/CommentDetails';
import ErrorPages from './components/Error/ErrorPages';

const router = createBrowserRouter([
  {
    path : "",
    element : <Home></Home>,
    errorElement : <ErrorPages></ErrorPages>,
    children : [
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/contact",
        element : <Contact></Contact>
      },
      {
        path : "/users",
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },
      {
        path : "/users/:usersId",
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        element : <UserDetails></UserDetails>
      },
      {
        path : "/comments",
        loader : () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element : <Comments></Comments>
      },
      {
        path : "/comments/:commentsId",
        loader :({params})=> fetch (`https://jsonplaceholder.typicode.com/comments/${params.commentsId}`),
        element: <CommentDetails></CommentDetails>
      },
    ]
  
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
