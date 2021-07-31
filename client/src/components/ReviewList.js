// import React, { useState } from 'react';
// import ReviewForm from './ReviewForm';
// import Review from './Review';
// const url = "http://127.0.0.1:3000/"

// function ReviewList() {
//   const [reviews, setReviews] = useState([]);

//   const getReview = (review) => {
//     const newReviews = [...reviews, review];
//     setReviews(newReviews);
//     fetch(url + "v1/reviews").then((result) => {
//       result.json().then((resp) => {
//         setReviews(resp)
//         console.log({review})
//       })
//     })
//   }

//   const deleteReview = (id) => {
//     const deleteArr = [...reviews].filter(review => review.id !== id);
//     fetch(url + `v1/reviews/${id}`, {
//       method: 'DELETE'
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.log(resp)
//         setReviews(deleteArr)
//       })
//     })
//   }
  
//   return (
//     <>
//     <br></br>
//     <br></br>
//       <ReviewForm onSubmit={getReview} />
//       <Review
//         reviews={reviews}
//         deleteReview={deleteReview}
//       />
//     </>
//   );
// }

// export default ReviewList;