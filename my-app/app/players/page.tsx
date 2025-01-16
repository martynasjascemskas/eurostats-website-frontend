import { Suspense } from "react";
import Search from "../ui/search";
import PlayerDataTable from "../ui/table";
import { PlayersTableSkeleton } from "../ui/skeletons";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || ";";
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Search placeholder="Search players..." />
        {query != ";" && (
          <Suspense fallback={<PlayersTableSkeleton />}>
            <PlayerDataTable query={query} type="byName" />
          </Suspense>
        )}
      </main>
    </div>
  );
}
