import React from 'react';
import { 
  RiTwitterFill,
  RiHome2Line,
  RiHashtag,
  RiBellLine,
  RiMessage2Line,
  RiPlayList2Line,
  RiBookmark2Line,
  RiProfileLine,
  RiMore2Line
} from 'react-icons/ri';

const TwitterSidebar = () => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="p-4">
        <RiTwitterFill size={32} color="white" className='mb-6' />
        <ul>
          {sidebarItem('Home', <RiHome2Line size={32} color="white" className='mb-6' />)}
          {sidebarItem('Explore', <RiHashtag size={32} color="white" className='mb-6' />)}
          {sidebarItem('Notifications', <RiBellLine size={32} color="white" className='mb-6' />)}
          {sidebarItem('Messages', <RiMessage2Line size={32} color="white" className='mb-6' />)}
          {sidebarItem('Lists', <RiPlayList2Line size={32} color="white" className='mb-6' />)}
          {sidebarItem('Bookmarks', <RiBookmark2Line size={32} color="white" className='mb-6' />)}
          {sidebarItem('Profile', <RiProfileLine size={32} color="white" className='mb-6' />)}
          {sidebarItem('More', <RiMore2Line size={32} color="white" className='mb-6' />)}
          {/* Add more trending items */}
        </ul>
      </div>
    </div>
  );

  function sidebarItem(title:string, icon?: any ) {
    return <li className="flex items-center space-x-2 mb-3">
      {icon}
      <span className='text-lg'>{title}</span>
    </li>;
  }
};

export default TwitterSidebar;