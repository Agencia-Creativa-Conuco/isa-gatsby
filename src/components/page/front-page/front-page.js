import React from "react";
import { connect, styled } from "frontity";
import HomeCover from "./home-cover";
import HomeContact from "./home-contact";
import HomeProjects from "./home-projects";
import HomeAplication from "./home-aplication";
import HomeOffer from "./home-offer";
import HomeNews from "./home-news";
import Calendar from "../../calendar";

const Post = ({ state }) => {

  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  // Load the post, but only if the data is ready.
  return data.isReady? (
    <Container>
      <HomeCover />
      <HomeOffer />
      <Calendar />
      <HomeNews />
      <HomeProjects />
      <HomeAplication />
      <HomeContact />
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;