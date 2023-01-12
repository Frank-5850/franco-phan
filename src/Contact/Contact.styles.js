import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  @media (min-width: 100px) and (max-width: 375px) {
    height: 60vh;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  @media (min-width: 100px) and (max-width: 375px) {
    width: 100vw;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

export const ContactMessage = styled.p`
  margin: 0 0 10px 0;
`;
