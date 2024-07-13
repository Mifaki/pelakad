import { db } from "~/server/db";
import PostCard from "./components/PostCard";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Pelekad
        </h1>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            {posts.map((item, index) => (
              <PostCard key={index + 1} id={item.id} name={item.name ? item.name : ''} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
