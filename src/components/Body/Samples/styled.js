import { maxWidth } from './../../../config/theme'
import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
  padding: 120px 0 170px;
  margin: auto;
  max-width: 1080px;
  .samples-title {
    max-width: 920px;
    text-align: center;
    margin: 0 auto 0;
    h1 {
      margin: 0;
      font-size: 100px;
      line-height: 138px;
      letter-spacing: -10px;
    }
  }
  .see-more {
    font-size: 21px;
    max-width: 520px;
    line-height: 37px;
    span {
      font-weight: 500;
    }
    a {
      font-weight: 500;
      color: ${props => props.theme.colors.orange};
      text-decoration: none;
    }
  }
  .images-wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    div {
      box-shadow: 0 2px 20px 0 rgba(0,0,0,.33);
      overflow: hidden;
      border-radius: 15px;
      margin-bottom: 50px;

      > img {
        object-fit: fill;
        height: 100%;
        width: 100%;
        transition: transform 0.5s ease 0s;
        :hover {
          transform: scale(1.2);
        }
      }
    }
  }

  ${maxWidth.small`
    padding: 60px 20px;
    .images-wrapper {
      div {
        width: 100% !important;
      }
    }
  `};
`;
