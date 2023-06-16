import { StyledContent, Title, LayoutContent } from "./styled";
import { Tile } from "../Tile";

export const Content = ({ title, list }) => (
  <StyledContent>
    <Title>{title}</Title>
    {list ? (
      <LayoutContent>
        {list.map((listItem) => (
          <Tile
            name={listItem.name}
            imagePath={listItem.imagePath}
            description={listItem.description}
            prise={listItem.prise}
          />
        ))}
      </LayoutContent>
    ) : (
      ""
    )}
  </StyledContent>
);
