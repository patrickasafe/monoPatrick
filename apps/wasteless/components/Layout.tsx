import { Header, LayoutContainer, Refrigerator } from "cyber-ui";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header
        title={"WASTELESS"}
        icon={Refrigerator({ width: "4rem", height: "4rem", fill: "white" })}
      />
      <span style={{ fontSize: "1.25rem", margin: "1.5rem" }}>
        Evite desperdícios, adicione aqui produtos para controle de validade.{" "}
      </span>
    </LayoutContainer>
  );
};
