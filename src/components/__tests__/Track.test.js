import { render, screen, cleanup } from "@testing-library/react";

import Track from "../Track/Track";

afterEach(() => {
    cleanup();
})

test("renders track component", () => {
    const track = { name: "wow", artists: "no way", album: "woah" }
    render(<Track name={track.name} artists={track.artists} album={track.album}/>)
    const TrackElement = screen.getByTestId("track-1")
    expect(TrackElement).toHaveTextContent("wow");
})