import React from 'react';

const Blog = () => {
     return (
          <div className='m-5'>
               <div>
                    <h1 className='text-2xl'> 1. What are the different ways to manage a state in a React application? </h1>
                    <p className='m-5'> Answer : React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.
                         React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app. </p>
               </div>
               <div>
                    <h1 className='text-2xl'> 2. How does prototypical inheritance work? </h1>
                    <p className='m-5'> Answer : The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                         Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date</p>
               </div>
               <div>
                    <h1 className='text-2xl'> 3.1 What is a unit test? </h1>
                    <p className='m-5'> Answer : What is meant by unit testing?
                         A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                         The above unit test “asserts” that 5 + 10 is equal to 15. If the Add function returns anything else Assert. IsEqual result in error and the test case will fail. After you write your test cases, you will run them to verify that everything is working correctly.
                    </p>
               </div>
               <div>
                    <h1 className='text-2xl'> 3.2 Why should we write unit tests? </h1>
                    <p className='m-5'> Answer :The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                         Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently
                    </p>
               </div>
               <div>
                    <h1 className='text-2xl'> 4. React vs. Angular vs. Vue? </h1>
                    <p className='m-5'> Answer :If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                         React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                         React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                         he choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                         Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                         Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.


                    </p>
               </div>
          </div>
     );
};

export default Blog;