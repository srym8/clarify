import { render, screen, cleanup } from "@testing-library/react";
import Playlist from "../Playlist/Playlist";
import TrackList from "../TrackList/TrackList";
import Track from "../Track/Track";

afterEach(() => {
    cleanup();
})

test("renders playlist component", () => {
    render(<Playlist />)
    const PlaylistElement = screen.getByTestId("playlist-1")
    expect(PlaylistElement).toBeInTheDocument();
})