import React from 'react';
import Ratings from 'react-ratings-declarative';

const Rating = ({ rating, changeable }) => {
  return (
    <div>
      <Ratings
        rating={rating}
        widgetRatedColors="#ffe247"
        changeRating={changeable}
      >
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
        <Ratings.Widget widgetDimension="30px" widgetHoverColor="#ffe247" />
      </Ratings>
    </div>
  );
};

export default Rating;
