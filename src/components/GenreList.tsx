import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading as="h2" fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List marginTop={3}>
        {isLoading && <Spinner />}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="0.5em">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                colorScheme={genre.id === selectedGenre?.id ? "orange" : ""}
                fontStyle={genre.id === selectedGenre?.id ? "italic" : "normal"}
                fontSize={"lg"}
                whiteSpace={"normal"}
                textAlign={"left"}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
