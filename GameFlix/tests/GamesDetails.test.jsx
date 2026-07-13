import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GamesDetails from "../services/GamesDetails";

const mockGames = [
  {
    id: 1,
    title: "Warframe",
    short_description: "A cooperative free-to-play third person shooter.",
    thumbnail: "https://example.com/warframe.jpg",
  },
  {
    id: 2,
    title: "Smite",
    short_description: "A third-person MOBA featuring mythological gods.",
    thumbnail: "https://example.com/smite.jpg",
  },
];

describe("GamesDetails", () => {
  it("renders nothing when games prop is not a valid array", () => {
    const { container } = render(<GamesDetails games={null} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders nothing when the games array is empty", () => {
    const { container } = render(<GamesDetails games={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders a card for each game with the correct title, description and image", () => {
    render(<GamesDetails games={mockGames} />);

    mockGames.forEach((game) => {
      expect(screen.getByText(game.title)).toBeInTheDocument();
      expect(screen.getByText(game.short_description)).toBeInTheDocument();
    });

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(mockGames.length);
    expect(images[0]).toHaveAttribute("src", mockGames[0].thumbnail);
  });
});
