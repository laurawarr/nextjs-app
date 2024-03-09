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
              <TextProperty label="Country Code" value={country.code} />
              <TextProperty label="Native" value={country.native} />
              <TextProperty label="Capital" value={country.capital} />
              <TextProperty label="Currency" value={country.currency} />
              <TextProperty label="Languages" value={
                country.languages.map(({ name }) => name).join(', ')
              } />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

const TextProperty = ({ label, value }: { label: string, value: string }) => (
  <Text fontSize="md" fontWeight={400}>
    <b>{label}</b>: {value || 'Unknown'}
  </Text>
)