import React, {useState} from 'react';
const api = "http://localhost:3001/"

export const Add = ({poemId}) => {
    const [count, setCounter] = useState(0)
    const newCounter = () => {
        return setCounter(count+1);
    };

    const likeSubmit = (e) => {
        e.preventDefault();
      const data = { 
          "like_count": count+1,
          "poem_id": poemId
        };
      fetch(api + "likes", {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
    }).then((result) => {
        result.json().then((resp) => {
          console.log(resp)
          newCounter(data)
        })
      })
    }

    return (
        <div>
            <button onClick={likeSubmit} className="like-btn">Like: {count}</button>
        </div>
    )
}