import React from "react";
import styled from "styled-components";

export const Footer = () => (
  <Wrapper className="topbar">
    <h5>
      Made with <span role="img" aria-label='heart'>❤️</span> by Maximiliano Vega
    </h5>
  </Wrapper>
);

const Wrapper = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.borderGrey};
  margin: auto;
  text-align: center;
  h5 {
    margin: 10px;
  }
`;

export default Footer;
