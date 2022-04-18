import React from "react";
import {
  Wrapper,
  Header,
  HeaderLeft,
  HeaderRight,
  Main,
  SearchWrapper,
} from "./Styles";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Search from "../../components/Search";

function Home() {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderLeft>
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </HeaderLeft>
          <HeaderRight>
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <AppsIcon />
            <AccountBoxIcon />
          </HeaderRight>
        </Header>
        <Main>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png"
            alt="google"
          />
          <SearchWrapper>
            <Search hideButtons />
          </SearchWrapper>
        </Main>
      </Wrapper>
    </>
  );
}

export default Home;
