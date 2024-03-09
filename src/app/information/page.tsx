"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { CountryList } from "@/components/CountryList";
import { CountryModal } from "@/components/modals/CountryModal";
import { Country } from "@/data/api";

export default function Info() {
  const [country, setSelectedCountry] = useState<Country | undefined>();

  return (
    <Box p={2}>
      <CountryModal
        country={country}
        onClose={() => setSelectedCountry(undefined)}
      />
      <CountryList
        onSelect={setSelectedCountry}
      />
    </Box>
  )
}