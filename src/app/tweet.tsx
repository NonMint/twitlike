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

export default Tweet;