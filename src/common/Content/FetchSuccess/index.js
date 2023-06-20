import { Title, LayoutContent, StyledFetchSuccess } from "./styled";
import { Tile } from "../../Tile";
import { ProductsFilter } from "./ProductsFilters";

export const FetchSuccess = ({ title, list, shoes }) => (
  <StyledFetchSuccess>
    <div>
      <ProductsFilter shoes={shoes} />
    </div>
    <div>
      <Title>{title}</Title>
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
    </div>
  </StyledFetchSuccess>
);
