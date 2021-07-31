// import React, { useState } from 'react';
// const url = "http://127.0.0.1:3000/"

// function ReviewForm(props) {
//   const [input, setInput] = useState("");
//   const [user, setUser] = useState("");

//   const userSubmit = () => {
//   const data = { 
//     "name": user
//   };
//   fetch(url + "v1/users", {
//       method: 'POST',
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(data)
// }).then(() => {
//   setUser('');
//   console.log({name: user})
//   });
// };

//   const handleChange = e => {
//     e.preventDefault();
//     setInput(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     fetch(url + "v1/reviews", {
//         method: 'POST',
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//           text: input,
//           user: user,
//           // username_id: usernameId
//         })
//   }).then(() => {
//     props.onSubmit({
//       text: input,
//       user: user,
//     });
//     setInput('');
//     userSubmit('')
//     console.log({
//       text: input,
//       user: user,
//     })
//   })
// }

//   return (
//     <div>
//     <form onSubmit={handleSubmit} className='poem-form'>
//       <input className='user-input' placeholder="Enter your username"
//                 type="text"
//                 required
//                 value={user}
//                 onChange={(e) => setUser(e.target.value)}/>
//           <input
//             placeholder='Contribute a line'
//             value={input}
//             onChange={handleChange}
//             name='text'
//             className='poem-input'
//           />
//           <button onClick={handleSubmit} className='poem-button'>
//             Submit
//           </button>
//     </form>
//     </div>
//   );
// }

// export default ReviewForm;