import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import useGoogleSearch from "../../hooks/useGoogleSearch";
import { useStateValue } from "../../providers/StateProvider";
import { response } from "../../response";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Header,
  HeaderBody,
  LogoWrapper,
  HeaderOptions,
  HeaderOptionsLeft,
  HeaderOptionsRight,
  SearchOption,
  SearchResult,
  ResultCount,
  Results,
  ResultsTitle,
  ResultsSnipet,
  ResultImage,
} from "./Styles";
function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = response;
  return (
    <>
      <Header>
        <LogoWrapper>
          <Link to="/">
            <img
              width={200}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png"
              alt="google"
            />
          </Link>
        </LogoWrapper>
        <HeaderBody>
          <Search hideButtons={false} />
          <HeaderOptions>
            <HeaderOptionsLeft>
              <SearchOption>
                <SearchIcon />
                <Link to="/all">All</Link>
              </SearchOption>
              <SearchOption>
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </SearchOption>
              <SearchOption>
                <ImageIcon />
                <Link to="/images">Images</Link>
              </SearchOption>
              <SearchOption>
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </SearchOption>
              <SearchOption>
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </SearchOption>
              <SearchOption>
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </SearchOption>
            </HeaderOptionsLeft>
            <HeaderOptionsRight>
              <SearchOption>
                <Link to="/settings">Settings</Link>
              </SearchOption>
              <SearchOption>
                <Link to="/tools">Tools</Link>
              </SearchOption>
            </HeaderOptionsRight>
          </HeaderOptions>
        </HeaderBody>
      </Header>
      {data && (
        <Results>
          <ResultCount>
            About {data?.searchInformation.formattedTotalResults} results ({" "}
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </ResultCount>
          {data?.items.map((item) => (
            <SearchResult key={item.cacheId}>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && (
                  <ResultImage
                    src={item.pagemap.cse_image[0].src}
                    alt="Search result"
                  />
                )}
                {item.displayLink}
              </a>
              <ResultsTitle href={item.link}>
                <h2>{item.title}</h2>
              </ResultsTitle>
              <ResultsSnipet>{item.snippet}</ResultsSnipet>
            </SearchResult>
          ))}
        </Results>
      )}
    </>
  );
}

export default SearchPage;
