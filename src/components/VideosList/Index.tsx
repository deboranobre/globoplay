import React, { useContext, useEffect, useState } from 'react';

import { videoItens } from '../../constants/videos';
import useKeyPress from '../../hooks/useKeyPress';
import { AppContext } from '../../store/context';
import { setBBBInfoVisibility, setMenuVisibility, setVideosActive } from '../../store/reducers';

import { PlayImg, VideoItem, VideoList, VideosListWrapper, VideoTitle } from './style';

const VideosList = () => {
  const arrowLeftPressed = useKeyPress('ArrowLeft');
  const arrowRightPressed = useKeyPress('ArrowRight');
  const arrowUpPressed = useKeyPress('ArrowUp');
  const { state, dispatch } = useContext(AppContext);
  const [selectedItem, setSelectedItem] = useState(-1);

  useEffect(() => {
    if (state.videosActive) {
      setSelectedItem(0);
    }
  }, [state.videosActive]);

  useEffect(() => {
    if (arrowRightPressed && state.videosActive) {
      const next = selectedItem + 1;
      if ((selectedItem === -1 || selectedItem >= 0) && next <= videoItens.length - 1) {
        setSelectedItem(next);
      }
    }
  }, [arrowRightPressed]);

  useEffect(() => {
    if (arrowLeftPressed && state.videosActive) {
      const previous = selectedItem - 1;
      if (selectedItem > 0) {
        setSelectedItem(previous);
      }

      if (selectedItem === 0) {
        dispatch(setMenuVisibility(true));
      }
    }
  }, [arrowLeftPressed]);

  useEffect(() => {
    if (arrowUpPressed && !state.menu) {
      setSelectedItem(-1);
      dispatch(setVideosActive(false));
      dispatch(setBBBInfoVisibility(true));
    }
  }, [arrowUpPressed]);

  const getVideoTitle = () => {
    const videoSelected = videoItens.find((video) => video.id === selectedItem + 1);
    return videoSelected?.name;
  };

  return (
    <VideosListWrapper>
      <VideoTitle hidden={!state.videosActive}>
        <h5>Big Brother Brasil</h5>
        <h4>{getVideoTitle()}</h4>
      </VideoTitle>
      <h5>Agora no BBB</h5>
      <VideoList>
        {videoItens.map((item, i) => (
          <VideoItem key={item.id} selected={i === selectedItem} hidden={i < selectedItem - 1}>
            <PlayImg
              src="../../images/icons/play-white-icon.png"
              width="64"
              selected={i === selectedItem}
            />
            <h4>Realities</h4>
            <h5>{item.name}</h5>
          </VideoItem>
        ))}
      </VideoList>
    </VideosListWrapper>
  );
};
export default VideosList;
