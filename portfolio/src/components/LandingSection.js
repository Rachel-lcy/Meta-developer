import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";



const greeting = "Hello, I am Rachel!";
const bio1 = "A frontend developer";
const bio2 = "Specialised in Front-end Development";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
     <VStack spacing={4} align={"center"}>
      <img
        src="https://i.pravatar.cc/150?img=7"
        alt="Rachel's Avatar"
        
      />
      <Heading>
        {greeting}   
      </Heading>
      <Heading>
        {bio1} 
      </Heading>
      <Heading>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection> 
);

export default LandingSection;
