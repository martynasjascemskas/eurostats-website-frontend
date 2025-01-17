"use client";

export default function LoadMoreButton({
  setPlayers,
  players,
}: {
  setPlayers: (count: number) => void;
  players: number;
}) {
  const handleClick = () => {
    setPlayers(players + 5);
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Load More
      </button>
    </div>
  );
}
