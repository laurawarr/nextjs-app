"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { STORAGE_KEYS, useStorageSetter, useStorageValue } from "@/data/storage";

type TextInputFormProps = {
  // The property to be updated in the session storage
  property: STORAGE_KEYS
  // The display name of the property
  displayName: string,
  // Optional text to be displayed on the button
  buttonText?: string
}

export const TextInputForm = ({
  property,
  displayName,
  buttonText = 'Save'
}: TextInputFormProps) => {
  const initialValue = useStorageValue(property) ?? ''
  const { mutate: updateStoredValue } = useStorageSetter(property)
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState<string | undefined>()

  const submitValue = () => {
    const newValue = value.trim()
    if (!newValue) {
      setError(`${displayName} cannot be empty`)
      return
    }
    updateStoredValue(newValue)
  }

  const handleChange = (newValue: string) => {
    setError(undefined)
    setValue(newValue)
  }

  return (
    <FormControl isInvalid={Boolean(error)} mb={4}>
      <FormLabel>{displayName}</FormLabel>
      <Flex>
        <Box flexGrow={1}>
          <Input
            placeholder={`Please enter your ${displayName}`}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
          {error && (
            <FormErrorMessage>{error}</FormErrorMessage>
          )}
        </Box>

        <Button
          colorScheme='blue'
          onClick={submitValue}
          ml={2}
        >
          {buttonText}
        </Button>
      </Flex>
    </FormControl>
  )
}
