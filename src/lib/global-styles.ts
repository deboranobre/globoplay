import styled, { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const colors = {
  white: '#FFF',
  black: '#000',
  grey: '#757575',
};

export const defaultFontFamily = 'Open Sans, Roboto, Helvetica, Arial, Verdana, Tahoma, sans-serif';

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  *{
    margin: 0;
    font-family: ${defaultFontFamily};
  }

  body{
    overflow: hidden;
  }

  button{cursor: pointer;}

  a{text-decoration: none;}
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Title = styled.h3``;
