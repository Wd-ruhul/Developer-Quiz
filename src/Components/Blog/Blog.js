import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <h2 className='text-indigo-900 text-center text-4xl'>Welcome To Our Blog</h2>
      <div className="blog-box w-3/4 p-5  mt-5 ">
        <div className=" bg-indigo-600 p-5 text-amber-200  mb-10 rounded shadow-2xl shadow-indigo-400">
          <h3 className='text-2xl'>what is the purpose of react router ?</h3>
          <p>
            React Router, and dynamic, client-side routing, allows us to build a
            single-page web application with navigation without the page
            refreshing as the user navigates. React Router uses component
            structure to call components, which display the appropriate
            information.
          </p>
        </div>
        <div className=" bg-indigo-600 p-5 text-amber-200  mb-10 rounded shadow-2xl shadow-indigo-400">
          <h3 className='text-2xl'>How does Context API Work ?</h3>
          <p>
            React Context is a method to pass props from parent to child
            component(s), by storing the props in a store(similar in Redux) and
            using these props from the store by child component(s) without
            actually passing them manually at each level of the component
            tree.The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </div>

        <div className=" bg-indigo-600 p-5 text-amber-200  mb-10 rounded shadow-2xl shadow-indigo-400">
          <h3 className='text-2xl'>Why ref is used in React?</h3>
          <p>
            efs are a function provided by React to access the DOM element and
            the React element that you might have created on your own. They are
            used in cases where we want to change the value of a child
            component, without making use of props and all. They also provide us
            with good functionality as we can use callbacks with them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;