import React from 'react';

export default function Rating(props) {

    const {rating,numberReviews}=props;
    return (
        <div className="rating">
              <span>
                 <i className={rating>=1?"fa fa-star": Rating>=0.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
              </span>
              <span>
                 <i className={rating>=2?"fa fa-star": Rating>=1.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
              </span>
              <span>
                 <i className={rating>=3?"fa fa-star": Rating>=2.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
              </span>
              <span>
                 <i className={rating>=4?"fa fa-star": Rating>=3.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
              </span>
              <span>
                 <i className={rating>=5?"fa fa-star": Rating>=4.5?'fa fa-star-half-o':'fa fa-star-o'}></i>
              </span>
              <span>
                {numberReviews+' reviews'}
              </span>
         </div>
    )
}
