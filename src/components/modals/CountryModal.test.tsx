import { render, screen } from "@testing-library/react";
import { CountryModal } from "./CountryModal";
import { Country } from "@/data/api";

describe("CountryModal", () => {
    test("renders modal when country prop is provided", () => {
        const country = {
            name: "United States",
            emoji: "🇺🇸",
            code: "US",
            native: "English",
            capital: "Washington, D.C.",
            currency: "USD",
            languages: [{ name: "English" }],
        } as Country;

        render(<CountryModal country={country} />);

        const modalHeader = screen.getByText("United States");
        expect(modalHeader).toBeDefined();

        const countryCode = screen.getByText("Country Code");
        expect(countryCode.parentElement?.innerHTML).toContain("US");

        const native = screen.getByText("Native");
        expect(native.parentElement?.innerHTML).toContain("English");

        const capital = screen.getByText("Capital");
        expect(capital.parentElement?.innerHTML).toContain("Washington, D.C.");

        const currency = screen.getByText("Currency");
        expect(currency.parentElement?.innerHTML).toContain("USD");

        const languages = screen.getByText("Languages");
        expect(languages.parentElement?.innerHTML).toContain("English");
    });
});
