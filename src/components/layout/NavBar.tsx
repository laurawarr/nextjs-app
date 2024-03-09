"use client";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { useStorageValue, useClearStorage, STORAGE_KEYS } from "@/data/storage";
import { UserProfileModal } from "@/components/modals/UserProfileModal";
import { useState } from "react";

export const NavBar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const username = useStorageValue(STORAGE_KEYS.USERNAME);
  const jobTitle = useStorageValue(STORAGE_KEYS.JOB_TITLE);
  const { mutate: clearStorage } = useClearStorage();

  return (
    <>
      <UserProfileModal isOpen={isProfileOpen} onClose={() => setProfileOpen(false)} />
      <Flex
        position="fixed"
        zIndex={10}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        p={2}
        boxShadow="md"
        bgColor="white"
      >
        <Box mx={2}>
          <Link href="/" mr={3}>Home</Link>
          <Link href="/information">Information</Link>
        </Box>

        <Menu>
          <MenuButton as={Button}>
            <Flex alignItems="center">
              <Avatar size='xs' mr={2} />
              <Flex direction="column" align="flex-start">
                <Text fontSize='sm' fontWeight="500">{username}</Text>
                <Text fontSize='xs' fontWeight="400">{jobTitle}</Text>
              </Flex>
            </Flex>
          </MenuButton>

          <MenuList>
            <MenuItem
              onClick={() => setProfileOpen(true)}
            >
              Edit Profile
            </MenuItem>
            <MenuItem
              onClick={() => clearStorage()}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}