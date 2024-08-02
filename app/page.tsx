"use client";
import { useEffect, useState } from "react";
import fetchPlayers from "./utils/api/fetchPlayers";

export default function Home() {
  const [players, setPlayers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchPlayers(currentPage);
        setPlayers((prevPlayers) => [...prevPlayers, ...data.data]);
        setCurrentPage(currentPage + 1);
        setHasMore(!!data.meta.next_cursor);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [currentPage, hasMore]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1); // Trigger data fetch for next page
  };

  return (
    <div>
      <h1>NBA Players</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.first_name} {player.last_name}</li>
        ))}
      </ul>
      {hasMore && <button onClick={handleLoadMore}>Load More</button>}
      {!hasMore && <p>No more players to load.</p>}
    </div>
  );
}
