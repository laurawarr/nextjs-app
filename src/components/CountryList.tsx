"use client";

import { Country, useCountries } from "@/data/api";
import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";

type CountryListProps = {
  onSelect: (country: Country) => void;
}

export const CountryList = ({ onSelect }: CountryListProps) => {
  const countries = useCountries();
  
  return (
    <Flex flexWrap="wrap">
      {countries.map((country) => (
        <Box
          key={country.code}
          w={{ base: '100%', sm: '50%', md: '33.33%', lg: '25%', '2xl': '20%' }}
          p={2}
        >
          <Card
            w="100%"
            _hover={{ bgColor: 'gray.100', cursor: 'pointer' }}
            onClick={() => onSelect(country)}
          >
            <CardBody display="flex">
              <Text fontSize="4xl">{country.emoji}</Text>
              <Flex
                direction="column"
                ml={4}
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                <Text
                  fontSize="xl"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  title={country.name}
                >
                  {country.name} ({country.code})
                </Text>
                <Text fontSize="sm">
                  Currency: {country.currency ?? 'Unknown'}
                </Text>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      ))}
    </Flex>
  );
}