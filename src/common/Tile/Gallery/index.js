import { ImagesContainer, Image } from "./styled"

export const Gallery = ({images}) => (
    <ImagesContainer >
    {images.map((image) =>
<Image src={image} alt="Miniature" /> 
    )}
  </ImagesContainer>
)