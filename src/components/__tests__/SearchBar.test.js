import { render, screen, cleanup } from "@testing-library/react";
import SearchBar from "../SearchBar/SearchBar";

afterEach(() => {
    cleanup();
})

test("renders searchbar component", () => {
    render(<SearchBar />)
    const SearchBarElement = screen.getByTestId("searchbar-1")
    expect(SearchBarElement).toBeInTheDocument();
})