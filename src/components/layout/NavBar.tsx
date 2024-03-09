"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Information", href: "/information" }
];

export const NavBar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const { data: username } = useStorageValue(STORAGE_KEYS.USERNAME);
  const { data: jobTitle } = useStorageValue(STORAGE_KEYS.JOB_TITLE);
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
        <NavLinks />

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

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <Box mx={2}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          mr={3}
          fontWeight={pathname === link.href ? 600 : 500}
        >
          {link.label}
        </Link>
      ))}
    </Box>
  )
}