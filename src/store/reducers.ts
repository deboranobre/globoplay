import {
  ActionType,
  HightlightItensActions,
  SetBBBInfoVisibility,
  SetMenuVisibility,
  SetVideosActive,
} from './actions';
import { HightlightItensState } from './state';

export function hightlightItensReducer(
  state: HightlightItensState,
  action: HightlightItensActions,
): HightlightItensState {
  switch (action.type) {
    case ActionType.SetMenuVisibility:
      return { ...state, menu: action.payload.menu };
    case ActionType.SetBBBInfoVisibility:
      return { ...state, bbbInfoVisibility: action.payload.bbbInfoVisibility };
    case ActionType.SetVideosActive:
      return { ...state, videosActive: action.payload.videosActive };
    default:
      return state;
  }
}

export const setMenuVisibility = (menu: boolean): SetMenuVisibility => ({
  type: ActionType.SetMenuVisibility,
  payload: { menu },
});

export const setBBBInfoVisibility = (bbbInfoVisibility: boolean): SetBBBInfoVisibility => ({
  type: ActionType.SetBBBInfoVisibility,
  payload: { bbbInfoVisibility },
});

export const setVideosActive = (videosActive: boolean): SetVideosActive => ({
  type: ActionType.SetVideosActive,
  payload: { videosActive },
});
