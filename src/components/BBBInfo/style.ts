import styled from 'styled-components';
import { colors } from '../../lib/global-styles';

export const BBBInfoWrapper = styled.div`
  padding-top: 7.5rem;
  padding-left: 12.5rem;
  width: 21.875rem;
  color: ${(props) => (props.hidden ? 'none' : 'initial')};

  p {
    color: ${colors.white};
    font-size: 1.125rem;
    margin-top: 1.875rem;
    margin-bottom: 20px;
  }
`;

interface MenuItemProps {
  highlight: boolean;
  icon?: boolean;
  padding?: string;
  viewButton?: boolean;
}

export const Button = styled.button<MenuItemProps>`
  background: ${(props) => (props.icon ? `url(../../images/icons/play-grey-icon.png)` : '')}
    no-repeat center left 0.5rem;
  background-image: ${(props) =>
    props.icon && props.highlight && props.viewButton
      ? `url(../../images/icons/play-black-icon.png)`
      : ''};
  background-size: 1.25rem;
  background-color: ${(props) => (props.highlight ? colors.white : 'transparent')};
  border: ${(props) =>
    props.highlight ? `0.3125rem solid ${colors.white}` : `0.125rem solid ${colors.grey}`};
  border-radius: 0.1875rem;
  color: ${(props) => (props.highlight ? colors.black : colors.grey)};
  padding: 0.625rem 1.25rem;
  padding-left: ${(props) => (props.padding ? props.padding : '1.25rem')};
  margin-right: 0.9375rem;
  font-weight: 500;
`;
