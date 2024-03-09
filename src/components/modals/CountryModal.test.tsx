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
        const countryCode = screen.getByText("Country Code: US");
        const native = screen.getByText("Native: English");
        const capital = screen.getByText("Capital: Washington, D.C.");
        const currency = screen.getByText("Currency: USD");
        const languages = screen.getByText("Languages: English");

        expect(modalHeader).toBeDefined();
        expect(countryCode).toBeDefined();
        expect(native).toBeDefined();
        expect(capital).toBeDefined();
        expect(currency).toBeDefined();
        expect(languages).toBeDefined();
    });
});
