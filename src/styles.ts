import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;

  grid-template-columns: 210px auto;
  grid-template-rows: 42px auto;

  grid-template-areas:
    'SHELLBAR SHELLBAR'
    'SIDENAV APPCONTAINER';

  background: #ffffff;
`;
