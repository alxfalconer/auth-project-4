import React, { useState } from 'react';
const api = "http://127.0.0.1:3001/"

export function ReviewForm(props) {
  const [input, setInput] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(api + "reviews", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          body: input
        })
  }).then(() => {
    props.onSubmit({
      body: input
    });
    setInput('');
    console.log({
      body: input
    })
  })
}

  return (
    <div>
    <form onSubmit={handleSubmit} className='poem-form'>
          <input
            placeholder='Contribute a line'
            value={input}
            onChange={handleChange}
            name='text'
            className='poem-input'
          />
          <button onClick={handleSubmit} className='poem-button'>
            Submit
          </button>
    </form>
    </div>
  );
}

// import React, { Component } from 'react';
// import axios from 'axios';

// export default class ReviewForm2 extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             body: ""
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             body: e.target.value
//         });
//     }

//     handleSubmit(e) {
//         axios.post("http://localhost:3001/reviews", {
//             review: {
//             body: this.state.body
//             }
//         },
//         // { withCredentials: true}
//         )
//         .then(response => {
//             if (response.data.status === 'created') {
//             this.props.handleAuth(response.data);
//             }
//             console.log("review res", response);
//         })
//         .catch(error => {
//             console.log("review error", error);
//         });
//         console.log("form submitted");
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <div>
//             <form onSubmit={this.handleSubmit} className='poem-form'>
//             <input 
//                     type="poem" 
//                     name="poem" 
//                     placeholder='Contribute a line'
//                     value={this.state.body} 
//                     onChange={this.handleChange} 
//                     className='poem-input'
//                     required 
//                     />
//                   <button className='poem-button' type='submit'>Submit</button>
//             </form>
//             </div>
//             );
        
//     }
// }