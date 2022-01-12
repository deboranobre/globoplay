import { HightlightItensState } from './state';

export enum ActionType {
  SetBBBInfoVisibility,
  SetMenuVisibility,
  SetVideosActive,
}

export interface SetBBBInfoVisibility {
  type: ActionType.SetBBBInfoVisibility;
  payload: HightlightItensState;
}

export interface SetMenuVisibility {
  type: ActionType.SetMenuVisibility;
  payload: HightlightItensState;
}

export interface SetVideosActive {
  type: ActionType.SetVideosActive;
  payload: HightlightItensState;
}

export type HightlightItensActions = SetBBBInfoVisibility | SetMenuVisibility | SetVideosActive;
