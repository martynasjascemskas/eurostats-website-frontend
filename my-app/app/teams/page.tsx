import { Suspense } from "react";
import Search from "../ui/search";
import PlayerDataTable from "../ui/table";
import Loading from "../loading";
import teamData from "./_data/teams.json";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Search placeholder="Search teams..." />
        <Suspense fallback={<Loading />}>
          <PlayerDataTable query={query} type="all" />
        </Suspense>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamData.teams.map((team, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={team.cover}
                alt={team.title}
                className="w-32 h-32 object-contain"
              />
              <p className="mt-2 text-lg font-medium">{team.title}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
