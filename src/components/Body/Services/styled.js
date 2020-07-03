import styled from "styled-components";
import { maxWidth } from './../../../config/theme'

export const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.grey};
  padding: 120px 0 170px;
  ${maxWidth.small`
    padding: 30px 0 60px;
  `};

  .horizontal-menu {
    max-width: none !important;
  }

  .ways-title {
    max-width: 1080px;
    margin: auto;
    ${maxWidth.small`
      padding: 0 20px;
    `};
  }

  .menu-item {
    margin: 5px 10px;
    border: none;
    cursor: pointer;
    width: 392px;
    height: 540px;
    background-color: #fff;
    margin-right: 15px;
    border-radius: 6px;
    box-shadow: 0px 17px 20px 0px rgba(0, 0, 0, 0.02);
    ${maxWidth.small`
      width: 300px;
      height: 410px;
    `};
  }
  .card {
    max-width: 240px;
    margin: auto;
    h5 {
      height: 180px;
    }
    ${maxWidth.small`
      h5 {
        font-size: 16px;
        line-height: 26px;
        height: 135px;
      }
      img {
        height: 70px;
      }
    `};
  }
  .card-title {
    padding: 40px 0 15px;
  }
  .menu-item-wrapper:focus {
    outline: none;
  }
  .menu-wrapper--inner {
    display: flex;
  }
`;
