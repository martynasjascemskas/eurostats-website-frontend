import { fetchPlayers } from "../lib/data";
import { Player } from "../lib/definitions";

export default async function PlayerDataTable({ query }: { query: string }) {
  const data = await fetchPlayers(query);
  console.log(data);

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Played</th>
            <th>Started</th>
            <th>Minutes</th>
            <th>Points</th>
            <th>2 Point %</th>
            <th>3 Point %</th>
            <th>Free %</th>
            <th>Off R</th>
            <th>Def R</th>
            <th>Total R</th>
            <th>Ass</th>
            <th>ST</th>
            <th>Turn O</th>
            <th>B</th>
            <th>BA</th>
            <th>FC</th>
            <th>FR</th>
            <th>PIR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player: Player, index: number) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.num_in_team}</td>
              <td>{player.games_played}</td>
              <td>{player.games_started}</td>
              <td>{player.minutes_played}</td>
              <td>{player.points}</td>
              <td>{player.two_point_percentage}</td>
              <td>{player.three_point_percentage}</td>
              <td>{player.free_throw_percentage}</td>
              <td>{player.offensive_rebounds}</td>
              <td>{player.defensive_rebounds}</td>
              <td>{player.total_rebounds}</td>
              <td>{player.assists}</td>
              <td>{player.steals}</td>
              <td>{player.turnovers}</td>
              <td>{player.blocks}</td>
              <td>{player.blocks_against}</td>
              <td>{player.fouls_commited}</td>
              <td>{player.fouls_received}</td>
              <td>{player.performance_index_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
