import { render, screen, fireEvent } from "@testing-library/react";
import { TextInputForm } from "./TextInputForm";
import { STORAGE_KEYS, useStorageSetter } from "@/data/storage";

jest.mock('@/data/storage');

describe("TextInputForm", () => {
    it("renders the form with the provided display name", () => {
        const displayName = "Username";
        render(
            <TextInputForm
                property={STORAGE_KEYS.USERNAME}
                displayName={displayName}
            />
        );

        const formLabel = screen.getByText(displayName);
        expect(formLabel).toBeDefined();
    });

    it("updates the property in session storage when the form is submitted", () => {
        const mockUpdateValue = jest.fn();
        const mockStorageSetter = useStorageSetter as jest.Mock;
        mockStorageSetter.mockReturnValue({ mutate: mockUpdateValue });

        const property = STORAGE_KEYS.USERNAME;
        const displayName = "Username";
        render(
            <TextInputForm property={property} displayName={displayName} />
        );

        const input = screen.getByLabelText(displayName);
        const inputValue = "testuser";
        fireEvent.change(input, { target: { value: inputValue } });

        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);

        expect(mockUpdateValue).toHaveBeenCalledWith(inputValue);
    });
});
