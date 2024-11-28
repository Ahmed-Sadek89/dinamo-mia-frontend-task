import CustomTable from '@/components/custom-table';
import { getPosts } from '@/libs/getPosts';

export default async function Home() {
  const posts = await getPosts();
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Ant Design with Next.js</h1>
      <CustomTable data={posts}/>
    </div>
  );
}