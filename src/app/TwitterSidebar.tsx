import React from 'react';

const TwitterSidebar = () => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Home</h2>
        <ul>
          <li className="flex items-center space-x-2">
            <span className="text-blue-500">1.</span>
            <span>#TailwindCSS</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-500">2.</span>
            <span>#ReactJS</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-500">3.</span>
            <span>#NextJS</span>
          </li>
          {/* Add more trending items */}
        </ul>
      </div>
    </div>
  );
};

export default TwitterSidebar;