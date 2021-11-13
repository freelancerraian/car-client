import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StarIcon from "@mui/icons-material/Star";


const ShowReview = () => {
    const [showReview, setShowReview] = useState([]);
    useEffect(() => {
        fetch('https://lit-mesa-58869.herokuapp.com/review')
        .then(res => res.json())
        .then(data=>setShowReview(data))
    },[])
    return (
        <div className="container my-3">
            <h2>This is Our Client Review.</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    showReview.map(review => <div class="col">
                    <div class="card h-100">
                    <img  src={review.userImg} class="w-50 mx-auto card-img-top" alt="review-imges"/>
                    <div class="card-body">
                        <h5 class="card-title"><Rating
                              name="text-feedback"
                              value={`${review.rating}`}
                              readOnly
                              precision={0.5}
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 0.55 }}
                                  fontSize="inherit"
                                />
                              }
                            /></h5>
                            <p class="card-text">Customer Name: {review.clientsName}</p>
                            <p class="card-text">
                                Email:{review.email}
                            </p>
                            <p>{review.massage }</p>
                    </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default ShowReview;