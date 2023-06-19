import { Title, LayoutContent, StyledContentSuccess } from "./styled";
import { Tile } from "../../Tile";

export const FetchSuccess = ({ title, list }) => (
  <StyledContentSuccess>
    <Title>{title}</Title>
    {list ? (
      <LayoutContent>
        {list.map((listItem) => (
          <Tile
            name={listItem.name}
            imagePath={listItem.imagePath}
            description={listItem.description}
            price={listItem.price}
          />
        ))}
      </LayoutContent>
    ) : (
      ""
    )}
  </StyledContentSuccess>
);
