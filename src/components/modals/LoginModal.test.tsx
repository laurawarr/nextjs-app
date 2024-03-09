import { render, screen } from "@testing-library/react";
import { LoginModal } from "./LoginModal";
import { useStorageValue } from "@/data/storage";

jest.mock("@/data/storage");

describe("LoginModal", () => {
    const useStorageValueMock = useStorageValue as jest.Mock;

    test("renders login form when username is not set", () => {
        // Mock the useStorageValue hook to return a username
        useStorageValueMock.mockReturnValue("");

        render(<LoginModal />);
        const usernameInput = screen.getByLabelText("Username");
        const nextButton = screen.getByRole("button", { name: "Next" });

        expect(usernameInput).toBeDefined();
        expect(nextButton).toBeDefined();
    });

    test("renders job title form when username is set but job title is not", () => {
        // Mock the useStorageValue hook to return a username
        useStorageValueMock.mockImplementation(
            (key: string) => (key === "username" ? "testuser" : "")
        );

        render(<LoginModal />);
        const jobTitleInput = screen.getByLabelText("Job Title");
        const submitButton = screen.getByRole("button", { name: "Submit" });

        expect(jobTitleInput).toBeDefined();
        expect(submitButton).toBeDefined();
    });

    test("does not open modal when both username and job title are set", () => {
        // Mock the useStorageValue hook to return both username and job title
        useStorageValueMock.mockImplementation(
            (key: string) => (key === "username" ? "testuser" : "developer")
        );

        render(<LoginModal />);
        const modal = screen.queryByRole("dialog", { name: "Login" });

        expect(modal).toBeNull();
    });
});
