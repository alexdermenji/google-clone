import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 1px solid lightgray;
`;

export const LogoWrapper = styled.div`
  margin-right: 40px;
`;
export const HeaderBody = styled.div``;

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  color: grey;
  a {
    text-decoration: none;
    color: gray;
  }
`;
export const HeaderOptionsLeft = styled.div`
  display: flex;
`;
export const HeaderOptionsRight = styled.div`
  display: flex;
  margin-left: 80px;
`;
export const SearchOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  a {
    margin-left: 5px;
  }
`;

export const SearchResult = styled.div`
  margin: 40px 0;
`;
export const ResultCount = styled.p`
  color: #70757a;
  font-size: 14px;
`;
export const Results = styled.div`
  max-width: 650px;
  margin-top: 20px;
  margin-left: 240px;
  margin-bottom: 100px;
`;
export const ResultsTitle = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  h2 {
    font-weight: 500;
  }
`;
export const ResultsSnipet = styled.p`
  margin-top: 10px;
`;
export const ResultImage = styled.img`
  object-fit: contain;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;
