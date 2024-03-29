-- Create Player table if not exists
CREATE TABLE Player (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Create Game table if not exists
CREATE TABLE Game (
  id             SERIAL PRIMARY KEY,
  datetime       TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  score_player_1 INT NOT NULL,
  score_player_2 INT NOT NULL,
  player_1       INT NOT NULL REFERENCES Player(id),
  player_2       INT NOT NULL REFERENCES Player(id)
);
