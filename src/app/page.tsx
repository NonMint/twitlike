import Image from 'next/image'
import './TwitterFeed.css';
import Tweet from './tweet';
import TwitterSidebar from './TwitterSidebar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="twitter-feed">
        <div className="col-span-1 p-4">
          <TwitterSidebar />
        </div>
        <div className="col-span-1 p-4">
          <h2>Column 2</h2>
          <Tweet
            username="JohnDoe"
            content="This is my first tweet!"
            date="May 17, 2023"
          />
          <Tweet
            username="JaneSmith"
            content="Just had a great day at the park! #nature"
            date="May 16, 2023"
          />
        </div>
        <div className="col-span-1 p-4">
          <h2>Column 3</h2>
          {/* Add tweets or content for column 3 */}
        </div>
      </div>
    </main>
  )
}
