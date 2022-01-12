import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../store/context';

import styled from 'styled-components';

const BodyWrapper = styled.div<{ background: boolean }>`
  width: 100%;
  height: 100vh;
  background-image: ${(props) =>
    props.background ? `url(../../images/tadeu.png)` : `url(../../images/bbb.png)`};
  background-size: 100%;
  transition: background-image 0.2s ease-in-out;
`;

const Body = (props: { children: JSX.Element }) => {
  const [useMainBG, setUseMainBG] = useState(true);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setUseMainBG(!state.videosActive);
  }, [state.videosActive]);

  return <BodyWrapper background={useMainBG}>{props.children}</BodyWrapper>;
};

export default Body;
