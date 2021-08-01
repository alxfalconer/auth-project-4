import React, {useState} from 'react';
// const url = "http://127.0.0.1:3000/"

const Like = ({reviewId}) => {
    const [count, setCounter] = useState(0)
    const newCounter = () => {
        return setCounter(count+1);
    };

    // const likeSubmit = (e) => {
    //     e.preventDefault();
    //   const data = { 
    //       "like_count": count+1,
    //       "poem_id": reviewId
    //     };
    //   fetch(url + "likes", {
    //       method: 'POST',
    //       headers: {"Content-Type": "application/json"},
    //       body: JSON.stringify(data)
    // }).then((result) => {
    //     result.json().then((resp) => {
    //       console.log(resp)
    //       newCounter(data)
    //     })
    //   })
    // }

    return (
        <div>
            <button onClick={newCounter} className="like-btn">Like: {count}</button>
        </div>
    )
}

export default Like;