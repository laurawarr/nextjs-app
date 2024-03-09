import { fireEvent, render, screen } from "@testing-library/react";
import { UserProfileModal } from "./UserProfileModal";

jest.mock("@/data/storage");

describe("UserProfileModal", () => {
    test("renders the modal with correct header", () => {
        render(<UserProfileModal isOpen={true} onClose={() => {}} />);
        const headerElement = screen.getByText("User Profile");
        expect(headerElement).toBeDefined();
    });

    test("renders the username input form", () => {
        render(<UserProfileModal isOpen={true} onClose={() => {}} />);
        const usernameInput = screen.getByLabelText("Username");
        expect(usernameInput).toBeDefined();
    });

    test("renders the job title input form", () => {
        render(<UserProfileModal isOpen={true} onClose={() => {}} />);
        const jobTitleInput = screen.getByLabelText("Job Title");
        expect(jobTitleInput).toBeDefined();
    });

    test("calls the onClose callback when modal is closed", () => {
        const onCloseMock = jest.fn();
        render(<UserProfileModal isOpen={true} onClose={onCloseMock} />);
        const closeButton = screen.getByLabelText("Close");
        fireEvent.click(closeButton);
        expect(onCloseMock).toHaveBeenCalled();
    });
});
