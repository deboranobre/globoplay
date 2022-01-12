import styled from 'styled-components';
import { colors } from '../../lib/global-styles';

export const MenuWrapper = styled.div`
  background: ${colors.black};
  color: ${colors.grey};
  position: fixed;
  left: 0;
  right: 0;
  height: 100vh;
  width: fit-content;
  display: flex;
  align-items: center;
  z-index: 10;
`;

interface MenuItemProps {
  selected: boolean;
  image: string;
  showMenu: boolean;
}

export const MenuItem = styled.li<MenuItemProps>`
  background: ${(props) =>
      props.selected
        ? `url(../../images/icons/${props.image}-black-icon.png)`
        : `url(../../images/icons/${props.image}-grey-icon.png)`}
    no-repeat;
  background-color: ${(props) => (props.selected ? colors.white : colors.black)};
  background-size: 24px;
  background-position: center left 1.25rem;
  color: ${(props) => (props.selected ? colors.black : colors.white)};
  padding: 1.25rem 0.625rem 20px 3.75rem;
  margin-top: 15px;

  span {
    display: ${(props) => (props.showMenu ? 'initial' : 'none')};
    padding-right: 1.875rem;
    padding-left: 1.25rem;
  }
`;
