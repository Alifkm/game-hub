import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
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
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
