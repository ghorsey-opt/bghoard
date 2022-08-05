import { Request, Response } from "express";
import { games } from "./game";

export const getReviews = (req: Request, res: Response) => {
  const gameId = req.params.game;
  const game = games.find(g => g.id === gameId);

  res.send((game && game.reviews) ?? []);
};

export const createReview = (req: Request, res: Response) => {
  const gameId = req.params.game;
  const game = games.find(g => g.id === gameId);
  game.reviews.push(req.body);
  res.send(game.reviews);
};
