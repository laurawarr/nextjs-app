"use client";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Country } from "@/data/api";

type CountryModalProps = {
  country?: Country
  onClose?: () => void
}

export const CountryModal = ({
  country,
  ...props
}: CountryModalProps) => {
  const { isOpen, onClose } = useDisclosure({
    isOpen: Boolean(country),
    onClose: props.onClose,
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {country && (
          <>
            <ModalHeader>
              <Text fontSize="2xl" display="inline" mr={2}>
                {country.emoji}
              </Text>
              {country.name}
            </ModalHeader>

            <ModalBody pb={6}>
              <Text fontSize="md">Country Code: {country.code}</Text>
              <Text fontSize="md">Native: {country.native}</Text>
              <Text fontSize="md">Capital: {country.capital}</Text>
              <Text fontSize="md">Currency: {country.currency}</Text>
              <Text fontSize="md">Languages: {
                country.languages.map(({ name }) => name).join(', ')
              }
              </Text>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}