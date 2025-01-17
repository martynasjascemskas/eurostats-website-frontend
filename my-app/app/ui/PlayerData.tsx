"use client";

import { useState } from "react";
import PlayerDataTable from "./table";
import LoadMoreButton from "./loadmorebutton";

export default function PlayerData({
  query,
  type,
}: {
  query: string;
  type: "all" | "byName";
}) {
  const [players, setPlayers] = useState(5);

  return (
    <div>
      <PlayerDataTable query={query} type={type} players={players} />
      <LoadMoreButton setPlayers={setPlayers} players={players} />
    </div>
  );
}
