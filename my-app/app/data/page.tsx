import { Suspense } from "react";
import PlayerDataTable from "../ui/table";
import { PlayersTableSkeleton } from "../ui/skeletons";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const params = await searchParams;
  const teamValue = params.team || "Default Team"; // Provide a default value

  console.log(teamValue);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>{teamValue}</h1>
        <h2>Player Data</h2>
        <Suspense fallback={<PlayersTableSkeleton />}>
          <PlayerDataTable query={teamValue} type="all" />
        </Suspense>
      </main>
    </div>
  );
}
