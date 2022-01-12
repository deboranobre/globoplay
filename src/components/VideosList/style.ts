import styled from 'styled-components';
import { colors, List } from '../../lib/global-styles';

export const VideosListWrapper = styled.div`
  padding-left: 12.5rem;
  padding-top: 5rem;
  font-size: 1.25rem;
  color: ${colors.grey};
`;

export const VideoList = styled(List)`
  display: flex;
  margin-top: 1.25rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow: hidden;
`;

export const VideoItem = styled.li<{ selected: boolean; hidden: boolean }>`
  background: url(../../images/bbb-video-bg.png) top center;
  width: 17.5rem;
  height: 9.8125rem;
  margin-right: 1.25rem;
  flex: 0 0 auto;
  color: ${colors.white};
  padding: 0 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  border: ${(props) => (props.selected ? `3px solid ${colors.white}` : '')};
  position: relative;

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.9375rem;
  }

  h4 {
    text-transform: uppercase;
    font-size: 0.875rem;
  }
`;

export const PlayImg = styled.img<{ selected: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.selected ? 'initial' : 'none')};
`;

export const VideoTitle = styled.div`
  color: ${colors.white};
  margin-bottom: 12.5rem;
  display: ${(props) => (props.hidden ? 'none' : 'block')};

  h4 {
    margin: 1.25rem 0;
    font-size: 1.75rem;
  }
`;
