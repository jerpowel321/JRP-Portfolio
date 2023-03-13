import React from 'react';
import { CONTACT } from '../utils/constants'
import styled from "styled-components";

import {
  PinkSubHeader,
  SmallText,
  breakpoints,
} from "../styles/global-styles";



const Footer = () => {
  console.log("contact.icon", CONTACT);
	return (
    <FlexContainer>
      <TextContainer>
        <ImageContainer>
          <img src="/images/turtle-logo.png" alt="Turtle" width="100%" />
        </ImageContainer>
        {CONTACT.map((contact) => (
          <ContactItem>
            <LogoContainer>
              <img
                src={`/images/footer/${contact.icon}`}
                alt={contact.icon}
                width="100%"
              />
            </LogoContainer>
            {contact.link ? (
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <SmallText>{contact.text}</SmallText>
              </a>
            ): (<SmallText>{contact.text}</SmallText>) }
          </ContactItem>
        ))}
      </TextContainer>
      <PinkSubHeader>Let's make something amazing together.</PinkSubHeader>
    </FlexContainer>
  );
}

export default Footer;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0px 100px;
  width: 90%;
  border-top: 1px solid white;
  margin: 50px auto;
  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column-reverse;
    text-align: center;
    justify-content: space-around;
  }
`;
export const ImageContainer = styled.div`
  width: 100px;
  padding: 0px 100px 30px;
  @media (max-width: ${breakpoints.m}px) {
  display: none;
  }
`;
export const LogoContainer = styled.div`
width: 25px;
padding-right: 10px;
`
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0px;
  @media (max-width: ${breakpoints.m}px) {
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  @media (max-width: ${breakpoints.m}px) {
    padding: 20px 0px;
  }
`;