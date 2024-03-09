"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { TextInputForm } from "@/components/forms/TextInputForm";
import { STORAGE_KEYS, useStorageValue } from "@/data/storage";

export const LoginModal = () => {
  const username = useStorageValue(STORAGE_KEYS.USERNAME)
  const jobTitle = useStorageValue(STORAGE_KEYS.JOB_TITLE)

  let formContent = null
  if (!username) {
    formContent = (
      <TextInputForm
        key="username"
        property={STORAGE_KEYS.USERNAME}
        displayName="Username"
        buttonText="Next"
      />
    )
  } else if (!jobTitle) {
    formContent = (
      <TextInputForm
        key="job-title"
        property={STORAGE_KEYS.JOB_TITLE}
        displayName="Job Title"
        buttonText="Submit"
      />
    )
  }

  return (
    <Modal isOpen={Boolean(formContent)} onClose={() => null}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          {formContent}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}