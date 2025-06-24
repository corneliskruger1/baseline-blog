import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home, { blogPostListLoader } from './pages/Home';
import BlogPost, { blogPostLoader } from './pages/BlogPost';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    loader: blogPostListLoader,
  },
  {
    path: '/blogpost/:id',
    Component: BlogPost,
    loader: blogPostLoader,
  },
  { path: '/about', element: <About /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
