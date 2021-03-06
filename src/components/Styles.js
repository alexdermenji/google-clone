import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 30px;
  padding: 10px 20px;
  border-radius: 999px;
  width: 75vw;
  max-width: 560px;
  color: grey;
  input {
    flex: 1;
    padding: 10px 20px;
    border: none;
    &:focus {
      outline-width: 0;
    }
  }
`;

export const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  button {
    margin: 5px;
    padding: 7px 15px;
    background-color: #f8f8f8;
    border: 1px solid white;
    color: #5f6368;
    text-transform: inherit;
    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      background-color: #f8f8f8;
      border: 1px solid #c6c6c6;
      color: #222;
      background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
    }
  }
`;
export const HiddenButton = styled.button`
  display: none; !important;
`;
