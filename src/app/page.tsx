import Image from 'next/image'
import './TwitterFeed.css';
import TwitterSidebar from './TwitterSidebar';
import AddTweet from './AddTweet';
import {TweetService, ts} from "@/app/tweet-service";
import Tweet from "@/app/tweet";

export default function Home() {
  const allTweets = ts.getAll();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddTweet />
      <div className="twitter-feed">
        <div className="col-span-1 p-4">
          <TwitterSidebar />
        </div>
        <div className="col-span-1 p-4">
          <h2>Column 2</h2>
            {allTweets.map((t, idx) => {
              return <Tweet
                  key={idx}
                  username={t.username}
                  content={t.content}
                  date={t.data}
              />
            })}
        </div>
        <div className="col-span-1 p-4">
          <h2>Column 3</h2>
          {/* Add tweets or content for column 3 */}
        </div>
      </div>
    </main>
  )
}
