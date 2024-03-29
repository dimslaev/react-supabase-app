-- Seed data for Player table
INSERT INTO player (id, name) VALUES
  (1, 'Player1'),
  (2, 'Player2'),
  (3, 'Player3');

-- Seed data for Game table
INSERT INTO game (id, datetime, score_player_1, score_player_2, player_1, player_2) VALUES
  (1, '2024-01-01 12:00:00', 2, 1, 1, 2),
  (2, '2024-01-02 14:30:00', 3, 2, 2, 3),
  (3, '2024-01-03 16:45:00', 1, 1, 3, 2);