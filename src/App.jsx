import React, { useState } from 'react';
import Comment from './components/Comment.jsx';
import Card from './components/Card.jsx';
import AddComment from './components/AddComment.jsx';
// This is a simple React component that renders "Hello World"

const commentsData = [
  {
    avatar: "https://semantic-ui.com/images/avatar/small/matt.jpg",
    name: "Matt",
    date: "26/05/2025",
    message: "How artistic!"
  },
  {
    avatar: "https://semantic-ui.com/images/avatar/small/justen.jpg",
    name: "Justen",
    date: "25/05/2025",
    message: "Nice photo!"
  },
  {
    avatar: "https://semantic-ui.com/images/avatar/small/elliot.jpg",
    name: "Elliot",
    date: "24/05/2025",
    message: "I like it!"
  },
  {
    avatar: "https://semantic-ui.com/images/avatar/small/steve.jpg",
    name: "Steve",
    date: "23/05/2025",
    message: "Great shot!"
  }
];

//Solution 1 : Utiliser une classe qui hérite de React.Component
// Cette classe doit contenir une méthode render qui retourne du JSX (combien de HTML et de JavaScript)
const App = () => {
  const [comments, setComments] = useState(commentsData); //Un objet d'état est immutable

  const addNewComment = (newComment) =>{
    console.log(newComment);
    setComments([...comments, newComment]);
  }

  return (
    <>
      {
        comments.map((comment, index) => (
          <Card key={index}>
            <Comment
              key={index}
              avatar={comment.avatar}
              name={comment.name}
              date={comment.date}
              message={comment.message}
              
            />
          </Card>
        ))
      }
      <AddComment addNewCommentHandler={addNewComment} />
    </>
  );
}
       

// Solution 2 : Utiliser une fonction fléchée
// const App = () => <h1>Hello World</h1>;

/*function App() {
  return (
    <h1>Hello World</h1>
  )
}*/

export default App
