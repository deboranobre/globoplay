import React, { useContext, useEffect, useState } from 'react';

import useKeyPress from '../../hooks/useKeyPress';
import { AppContext } from '../../store/context';
import { setBBBInfoVisibility, setMenuVisibility, setVideosActive } from '../../store/reducers';

import { BBBInfoWrapper, Button } from './style';

const BBBInfo = () => {
  const arrowLeftPressed = useKeyPress('ArrowLeft');
  const arrowRightPressed = useKeyPress('ArrowRight');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const { state, dispatch } = useContext(AppContext);
  const [highlightViewButton, setHighlightViewButton] = useState(false);
  const [highlightViewMoreButton, setHighlightViewMoreButton] = useState(false);

  useEffect(() => {
    if (state.bbbInfoVisibility && !state.menu) {
      setHighlightViewButton(true);
      setHighlightViewMoreButton(false);
    }
  }, [state.bbbInfoVisibility, state.menu]);

  useEffect(() => {
    if (state.bbbInfoVisibility) {
      if (arrowLeftPressed && highlightViewMoreButton) {
        setHighlightViewMoreButton(false);
        setHighlightViewButton(true);
      }

      if (arrowLeftPressed && highlightViewButton) {
        setHighlightViewButton(false);
        dispatch(setMenuVisibility(true));
        dispatch(setBBBInfoVisibility(false));
      }
    }
  }, [arrowLeftPressed]);

  useEffect(() => {
    if (arrowRightPressed && highlightViewButton) {
      setHighlightViewMoreButton(true);
      setHighlightViewButton(false);
    }
  }, [arrowRightPressed]);

  useEffect(() => {
    if (arrowDownPressed && !state.menu) {
      dispatch(setVideosActive(true));
      dispatch(setBBBInfoVisibility(false));
    }
  }, [arrowDownPressed]);

  return (
    <BBBInfoWrapper hidden={state.videosActive}>
      <img src="../../images/bbb-branco.png" alt="BBB" width="200" />
      <p>Acompanhe 24h ao vivo a casa mais vigiada do Brasil</p>
      <Button highlight={highlightViewButton} icon padding="1.875rem" viewButton>
        Assista
      </Button>{' '}
      <Button highlight={highlightViewMoreButton}>Veja mais</Button>
    </BBBInfoWrapper>
  );
};
export default BBBInfo;
