import styled from "styled-components";

import Nav from "./Nav";

const Div = styled.div`
  width: 60%;
  margin: 0 auto;

  p {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Layout = ({ children }) => {
  return (
    <Div>
      <Nav />
      <>{children}</>
    </Div>
  );
};

export default Layout;
