import { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // name: PlayStation
    // slug: playstation
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    linux: FaLinux,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
