import {
  StyledClothingFilters,
  Form,
  Label,
  Input,
  Fieldset,
  List,
  ListItem,
  FiledTitle,
  Button,
} from "./styled";
import {
  clothesSizes,
  shoesSizes,
  colors,
  shoesType,
  clothesType,
} from "./filterElemntsList";
import { nanoid } from "@reduxjs/toolkit";

export const ProductsFilter = ({ shoes }) => (
  <StyledClothingFilters>
    <Form>
      <Fieldset>
        <FiledTitle>Wybierz Kolor</FiledTitle>
        <List>
          {colors.map((color) => (
            <ListItem key={nanoid()}>
              <Label>
                <Input type="radio" value={color} />
                {color}
              </Label>
            </ListItem>
          ))}
        </List>
      </Fieldset>

      {shoes ? (
        <>
          <Fieldset>
            <FiledTitle>Wybierz Rozmiar</FiledTitle>
            <List>
              {shoesSizes.map((size) => (
                <ListItem key={nanoid()}>
                  <Label>
                    <Input type="radio" value={size} />
                    {size}
                  </Label>
                </ListItem>
              ))}
            </List>
          </Fieldset>
          <Fieldset>
            <FiledTitle>Wybierz typ</FiledTitle>
            <List>
              {shoesType.map((type) => (
                <ListItem key={nanoid()}>
                  <Label>
                    <Input type="radio" value={type} />
                    {type}
                  </Label>
                </ListItem>
              ))}
            </List>
          </Fieldset>
        </>
      ) : (
        <>
          <Fieldset>
            <FiledTitle>Wybierz rozmiar</FiledTitle>
            <List>
              {clothesSizes.map((size) => (
                <ListItem key={nanoid()}>
                  <Label>
                    <Input type="radio" value={size} />
                    {size}
                  </Label>
                </ListItem>
              ))}
            </List>
          </Fieldset>
          <Fieldset>
            <FiledTitle>Wybierz typ</FiledTitle>
            <List>
              {clothesType.map((type) => (
                <ListItem key={nanoid()}>
                  <Label>
                    <Input type="radio" value={type} />
                    {type}
                  </Label>
                </ListItem>
              ))}
            </List>
          </Fieldset>
        </>
      )}

      <Button>Wyszukaj</Button>
    </Form>
  </StyledClothingFilters>
);
