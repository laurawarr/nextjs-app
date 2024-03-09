"use client";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { TextInputForm } from "@/components/forms/TextInputForm";
import { STORAGE_KEYS } from "@/data/storage";

type UserProfileModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export const UserProfileModal = (props: UserProfileModalProps) => {
  const { isOpen, onClose } = useDisclosure(props);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>User Profile</ModalHeader>
        <ModalBody>
          <TextInputForm
            property={STORAGE_KEYS.USERNAME}
            displayName="Username"
          />
          <TextInputForm
            property={STORAGE_KEYS.JOB_TITLE}
            displayName="Job Title"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}