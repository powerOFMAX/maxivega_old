import React from "react";
import styled from "styled-components";
import { Github, Linkedin, Medium } from '../commons'

export const Header = () => (
  <Wrapper className="topbar">
    <div className="social">
      <a href="https://github.com/powerOFMAX" target="_blank" rel="noopener noreferrer">
        <Github height='20' width='20' />
      </a>
      <a href="https://medium.com/@powerOFMAX" target="_blank" rel="noopener noreferrer">
        <Medium height='20' width='20' />
      </a>
      <a href="https://www.linkedin.com/in/maxivega/" target="_blank" rel="noopener noreferrer">
        <Linkedin height='20' width='20' />
      </a>
    </div>
  </Wrapper>
);

const Wrapper = styled.header`
  border-bottom: 1px solid ${props => props.theme.colors.borderGrey};
  text-align: right;
  padding: 16px 30px 15px;
  .social {
    > a {
      padding: 5px;
    }
  }
`;

export default Header;
