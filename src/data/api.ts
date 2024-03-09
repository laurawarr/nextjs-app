"use client";

import { gql, useSuspenseQuery } from "@apollo/client";

const countriesQuery = gql`query {
  countries(filter: {}) {
    code
    name
    capital
    emoji
    currency
    native
    languages {
      code
      name
    }
  }
}`

export type Country = {
  code: string;
  name: string;
  capital: string;
  emoji: string;
  currency: string;
  native: string;
  languages: {
    code: string;
    name: string;
  }[];
}

type Response = {
  countries: Country[];
}

export function useCountries() {
  const { data } = useSuspenseQuery<Response>(countriesQuery);
  return data?.countries;
}