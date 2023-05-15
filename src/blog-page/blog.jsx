import React from 'react'
import './blog.css'
import react_icon from '../components/pic/react-js.png'
import node_icon from '../components/pic/node.js.jpg'
import python_icon from '../components/pic/Python.png'

function Blog() {
  return (
    <div>
        <div>
            <a className='home-link' href='../'>go to home page</a>
        </div>
        <div className='reactJS'>
            <div className='blog-frame'>
            <p className='blog_title'>React.JS</p>
            <img src={react_icon} className='blog-img'/>
            <p className='details'>
            React.js is a popular JavaScript library used for building modern web applications.
             It's known for its simplicity and flexibility, making it a go-to choice for developers.
              One of the key features of React is its component-based architecture,
              which allows developers to break down their UI into reusable and independent pieces of code.
               This not only makes the code easier to maintain,
               but also improves the overall performance of the application.
                Additionally, React's virtual DOM enables efficient updates and rendering of components,
                 making it suitable for building complex and dynamic user interfaces. 
                 With a large and supportive community, extensive documentation, 
                 and a variety of third-party libraries,
             React.js is a great choice for building scalable and high-performance web applications.
            </p>
            </div>
        </div>

        <div className='nodeJS'>
            <div className='blog-frame'>
            <p className='blog_title'>Node.JS</p>
            <img src={node_icon} className='blog-img'/>
            <p className='details'>
            Node.js has become a popular choice for building server-side applications due to its ability to 
            handle large volumes of data and concurrency. This JavaScript runtime environment allows developers
             to write server-side code using JavaScript, a language that is already familiar to many front-end
              developers. Node.js provides a non-blocking I/O model, which means that it can handle multiple 
              requests simultaneously, making it ideal for real-time applications such as chat applications,
               streaming services, and gaming platforms. With the help of the Node Package Manager (npm),
                developers have access to a vast library of pre-built packages, making it easier to build 
                complex applications quickly. Moreover, Node.js is cross-platform compatible, allowing
                 developers to write code once and deploy it on different platforms. Overall,
             Node.js provides a powerful and efficient environment for building scalable and high-performance
              server-side applications.
            </p>

            </div>
            </div>

        <div className='python'>
            <div className='blog-frame'>
            <p className='blog_title'>Python</p>
            <img src={python_icon} className='blog-img'/>
            <p className='details'>
            Python is a versatile programming language that has been gaining popularity due to its simplicity and 
            flexibility. It is a high-level language, which means that it is easier to read and write,
             making it an ideal language for both beginner and advanced developers.
              Python is widely used in different fields, including web development, 
              scientific computing, data analysis, machine learning, and artificial intelligence.
               Its popularity can be attributed to its extensive standard library,
                which provides developers with a range of modules and functions to simplify programming tasks.
                 Furthermore, Python has a large and supportive community that contributes to its development and 
                 provides a wide range of third-party libraries and frameworks. With its easy-to-learn syntax, 
                 readability, and wide range of applications,
             Python is a great choice for developers looking to build scalable and efficient applications.
            </p>
                </div>
        </div>
    </div>
  )
}

export default Blog