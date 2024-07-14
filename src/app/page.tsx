import { db } from '~/server/db';
import LandingContainer from './container/LandingContainer';

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <LandingContainer posts={posts} />
    </main>
  );
}
