import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      comment: Yup.string().min(25,"Must be at least 25 characters" ).required('Required'),
    }),

    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      const result = await submit(values);
     
      useEffect(() => {
        if (response?.type === 'success') {
          onOpen({
            type: 'success',
            message: `Form submitted successfully! Thank you, ${values.firstName}`,
          });

        }
        else if (response?.type === 'error') {
          onOpen({
            type: 'error',
            message: 'Submission failed. Please try again later.',
          });
        }
      }, [response, onOpen, formik.values.firstName]);
     },
    
  });
  
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  {...formik.getFieldProps('firstName')}
                  id="firstName"
                  name="firstName"
                  placeholder = "Your first name"
                />
                <FormErrorMessage>{ formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  {...formik.getFieldProps('email')}
                  id="email"
                  name="email"
                  type="email"
                  placeholder = "Your email address"
                />
                <FormErrorMessage>{ formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"
                {...formik.getFieldProps('type')}
                placeholder = "Enquiry type" >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  {...formik.getFieldProps('comment')}
                  id="comment"
                  name="comment"
                  height={250}
                  placeholder = "Your message"
                />
                <FormErrorMessage>{ formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading ={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
