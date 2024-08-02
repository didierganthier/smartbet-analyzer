"use client";
import { useEffect, useState } from "react";
import fetchPlayers from "./utils/api/fetchPlayers";

export default function Home() {
  const [players, setPlayers] = useState<any[]>([]);

  useEffect(() => {
    fetchPlayers().then((data: any) => {
      console.log(data.data);
      setPlayers(data.data);
    }).catch((error: any) => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <h1>NBA Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.first_name} {player.last_name}</li>
        ))}
      </ul>
    </div>
  );
}
