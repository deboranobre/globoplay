import React, { useReducer } from 'react';
import styled from 'styled-components';

import BBBInfo from './components/BBBInfo/Index';
import Body from './components/Body';
import Menu from './components/Menu/Index';
import VideosList from './components/VideosList/Index';
import { AppContext } from './store/context';
import { hightlightItensReducer } from './store/reducers';
import { initialHightlightItensState } from './store/state';

const GloboplayLogo = styled.img`
  position: absolute;
  right: 5rem;
  top: 3.125rem;
`;

function App() {
  const [state, dispatch] = useReducer(hightlightItensReducer, initialHightlightItensState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Body>
        <>
          <Menu />
          <a href="https://globoplay.globo.com/">
            <GloboplayLogo src="../../images/globoplay.png" width="120" />
          </a>
          <BBBInfo />
          <VideosList />
        </>
      </Body>
    </AppContext.Provider>
  );
}

export default App;
