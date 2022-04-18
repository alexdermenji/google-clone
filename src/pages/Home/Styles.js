import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
  a {
    margin-right: 20px;
    text-decoration: inherit;
    color: rgba(0, 0, 0, 0.87);
    font-size: 15px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const HeaderLeft = styled.div``;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  min-width: 13vwpx;
  justify-content: space-between;
`;
export const Main = styled.main`
  flex: 1;
  display: flex;
  margin-top: 10%;
  flex-direction: column;

  img {
    object-fit: contain;
    height: 100px;
  }
`;

export const SearchWrapper = styled.div`
  margin: 0 auto;
  margin-top: 40px;
`;
