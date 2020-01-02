import React from 'react';
import { ActorImgContainer, ActorCard, ActorName } from './Movie-cast.styles';
import placeholder from '../../../assets/user-placeholder.jpg';

const Actor = ({ image, name }) => {
  return (
    <ActorCard>
      <ActorImgContainer>
        <img
          src={
            image === null
              ? placeholder
              : `https://image.tmdb.org/t/p/original/${image}`
          }
          alt="Actor img"
        />
      </ActorImgContainer>
      <ActorName>{name}</ActorName>
    </ActorCard>
  );
};

export default Actor;
