import { useGetGames } from "@/api/game/hooks";
import { Table } from "@radix-ui/themes";

export function Game() {
  const games = useGetGames();

  if (games.isLoading) {
    return <div>Loading...</div>;
  }

  if (games.isError) {
    return <div>Error</div>;
  }

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Player 1</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Score 1</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Player 2</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Score 2</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {games.data?.map((game) => (
          <Table.Row key={game.id}>
            <Table.Cell>{game.datetime}</Table.Cell>
            <Table.Cell>{game.player_1}</Table.Cell>
            <Table.Cell>{game.score_player_1}</Table.Cell>
            <Table.Cell>{game.player_2}</Table.Cell>
            <Table.Cell>{game.score_player_2}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
