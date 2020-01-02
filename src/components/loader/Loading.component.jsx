import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { LoaderContainer, LoadingText } from './Loading.styles';

const Loading = () => {
  return (
    <LoaderContainer>
      <Loader
        type="Bars"
        color="#2176ff"
        height={100}
        width={100}
        //3 secs
      />
      <LoadingText>Loading</LoadingText>
    </LoaderContainer>
  );
};

export default Loading;
