"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { STORAGE_KEYS, useStorageValue } from "@/data/storage";

export default function Home() {
  const username = useStorageValue(STORAGE_KEYS.USERNAME);

  return (
    <Flex justify="center" align="center" direction="column" py={10}>
      <Text fontSize="2xl">Welcome {username}!</Text>
      <Link href="/information" mt={2}>
        <Button>Go to Information</Button>
      </Link>
    </Flex>
  );
}
