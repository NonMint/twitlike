import Image from 'next/image'
import './TwitterFeed.css';
import AddTweet from './AddTweet';

const Tweet = ({ username, content, date }: any) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center mb-2">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://placekitten.com/50/50"
          alt="User Avatar"
        />
        <div>
          <span className="font-bold text-black">{username}</span>
          <span className="text-black text-sm ml-1">{date}</span>
        </div>
      </div>
      <p className="text-lg text-black">{content}</p>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddTweet />
      <div className="twitter-feed">
        <div className="col-span-1 bg-gray-200 p-4">
          <h2>Column 1</h2>
          {/* Add tweets or content for column 1 */}
        </div>
        <div className="col-span-1 bg-gray-200 p-4">
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
        <div className="col-span-1 bg-gray-200 p-4">
          <h2>Column 3</h2>
          {/* Add tweets or content for column 3 */}
        </div>
      </div>
    </main>
  )
}
