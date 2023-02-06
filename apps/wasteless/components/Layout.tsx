import { Header, LayoutContainer, Refrigerator } from "cyber-ui";
import { slogans } from "../data/mayaraSloganIdeas";
import { Subtitle } from "./Subtitle";


export const Layout = () => {
  

  return (
    <LayoutContainer>
      <Header
        title={"WASTELESS"}
        icon={Refrigerator({ width: "4rem", height: "4rem", fill: "white" })}
      />
      <Subtitle subtitles={slogans} />
    </LayoutContainer>
  );
};
