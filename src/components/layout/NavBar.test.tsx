import { render, screen, fireEvent } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { useClearStorage } from "@/data/storage";

jest.mock('@/data/storage');

describe("NavBar", () => {
    test("renders navigation links", () => {
        render(<NavBar />);
        
        const homeLink = screen.getByText("Home");
        const informationLink = screen.getByText("Information");
        
        expect(homeLink).toBeDefined();
        expect(informationLink).toBeDefined();
    });

    test("opens user profile modal when edit profile is clicked", () => {
        render(<NavBar />);
        
        const menuButton = screen.getByRole("button", { name: "avatar username.value jobTitle.value" });
        fireEvent.click(menuButton);

        const editButton = screen.getByText("Edit Profile");
        fireEvent.click(editButton);
        
        const userProfileModal = screen.getByRole("dialog", { name: "User Profile" });
        expect(userProfileModal).toBeDefined();
    });

    test("clears storage when logout is clicked", () => {
        const mockClearStorage = jest.fn();
        const mockUseClearStorage = useClearStorage as jest.Mock;
        mockUseClearStorage.mockReturnValue({ mutate: mockClearStorage });

        render(<NavBar />);
        
        const menuButton = screen.getByRole("button", { name: "avatar username.value jobTitle.value" });
        fireEvent.click(menuButton);

        const logoutButton = screen.getByText("Logout");
        fireEvent.click(logoutButton);
        
        expect(mockClearStorage).toHaveBeenCalled();
    })
});
