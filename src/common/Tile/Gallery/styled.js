import styled from "styled-components";

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  grid-row: 4 / span 3;
`;

export const Image = styled.img`
width: 200px;
cursor: pointer;
`