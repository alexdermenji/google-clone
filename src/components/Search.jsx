import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Wrapper, Buttons, HiddenButton } from "./Styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../providers/StateProvider";
function Search({ hideButtons }) {
  const [input, setInput] = React.useState("");
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch({ type: "SET_SEARCH_TERM", payload: input });
  };
  return (
    <form>
      <Wrapper>
        <SearchIcon />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </Wrapper>

      {!hideButtons ? (
        <Buttons>
          <HiddenButton type="submit" onClick={search} variant="outlined">
            Google search
          </HiddenButton>
          <HiddenButton variant="outlined">I am feeling lucky</HiddenButton>
        </Buttons>
      ) : (
        <Buttons>
          <Button type="submit" onClick={search} variant="outlined">
            Google search
          </Button>
          <Button variant="outlined">I am feeling lucky</Button>
        </Buttons>
      )}
    </form>
  );
}

export default Search;
