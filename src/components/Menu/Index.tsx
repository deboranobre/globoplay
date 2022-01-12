import React, { useContext, useEffect, useState } from 'react';
import { menuItens } from '../../constants/menu';

import useKeyPress from '../../hooks/useKeyPress';
import { List } from '../../lib/global-styles';
import { AppContext } from '../../store/context';
import { setBBBInfoVisibility, setMenuVisibility } from '../../store/reducers';
import { MenuItem, MenuWrapper } from './style';

const Menu = () => {
  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const arrowRightPressed = useKeyPress('ArrowRight');
  const [selectedItem, setSelectedItem] = useState(-1);
  const [showMenu, setShowMenu] = useState(true);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (state.menu) {
      setShowMenu(true);
    }
  }, [state.menu]);

  useEffect(() => {
    if (arrowDownPressed && state.menu) {
      const next = selectedItem + 1;
      if ((selectedItem === -1 || selectedItem >= 0) && next <= menuItens.length) {
        setSelectedItem(next);
      }
    }
  }, [arrowDownPressed]);

  useEffect(() => {
    if (arrowUpPressed && state.menu) {
      const previous = selectedItem - 1;
      if (selectedItem > 0) {
        setSelectedItem(previous);
      }
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowRightPressed) {
      setSelectedItem(-1);
      setShowMenu(false);
      dispatch(setMenuVisibility(false));

      if (!state.videosActive) {
        dispatch(setBBBInfoVisibility(true));
      }
    }
  }, [arrowRightPressed]);

  return (
    <MenuWrapper>
      <List className="menu">
        {menuItens.map((item, i) => (
          <MenuItem
            key={item.id}
            selected={i === selectedItem}
            image={item.image}
            showMenu={showMenu}
          >
            <span>{item.name}</span>
          </MenuItem>
        ))}
      </List>
    </MenuWrapper>
  );
};

export default Menu;
