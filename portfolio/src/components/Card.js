import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectsSection from "./ProjectsSection";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align= "flex-start"
      border = "1px solid none"
      borderRadius = "md"
      overflow = "hidden"
      boxShadow = "lg"
      bg="white"
    >
      <Image 
          src={imageSrc} 
          alt={title} 
          objectFit ="cover"
          w = "100%"
          h = "200%"
      />
      <VStack p={4} align ="flex-start" > 
        <Heading size ="md" color="black">{title}</Heading>
        <Text color="grey" position = "">{description}</Text>
        <HStack>
          <Text color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
