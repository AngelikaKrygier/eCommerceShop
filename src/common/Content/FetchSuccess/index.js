import { Title, LayoutContent } from "./styled";
import { Tile } from "../../Tile";

export const FetchSuccess = ({ title, list }) => (
  <>
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
  </>
);
