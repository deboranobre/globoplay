import React, { createContext } from 'react';

import { HightlightItensActions } from './actions';
import { HightlightItensState, initialHightlightItensState } from './state';

export const AppContext = createContext<{
  state: HightlightItensState;
  dispatch: React.Dispatch<HightlightItensActions>;
}>({
  state: initialHightlightItensState,
  dispatch: () => undefined,
});
