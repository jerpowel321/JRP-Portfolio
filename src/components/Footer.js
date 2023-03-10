import React from 'react';
import { CONTACT } from '../utils/constants'
import styled from "styled-components";

import {
  Header,
  PinkSubHeader,
  Text,
  SecondaryHeader,
  SubHeader,
  SmallText,
} from "../styles/global-styles";



const Footer = () => {
	return (
    <FlexContainer>
      <div>
        <ImageContainer>
          <img src="/images/turtle-logo.png" alt="Turtle" width="100%" />
        </ImageContainer>
        {CONTACT.map((contact) => (
          <>
            <LogoContainer>
              <img src={`/images/${contact.icon}`} alt={contact.icon} width="100%" />
            </LogoContainer>
            <SmallText>{contact.text}</SmallText>
          </>
        ))}
      </div>
      <PinkSubHeader>Let's make something amazing together.</PinkSubHeader>
    </FlexContainer>
  );
}

export default Footer;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 0px;
  width: 90%;
  border-top: 1px solid white;
  margin: 50px auto;
`;
export const ImageContainer = styled.div`
width: 100px;
padding: 20px 100px;
`
export const LogoContainer = styled.div`
width: 20px;
`