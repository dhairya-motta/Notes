import React from 'react';
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ userInfo, onLogout }) => {
  if (!userInfo) {
    return <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />;
  }

  return (
    <div className="glass-card flex items-center gap-3 px-3 py-2" style={{borderRadius:'1rem', background:'rgba(255,255,255,0.7)', boxShadow:'0 2px 8px rgba(44,62,80,0.08)', backdropFilter:'blur(6px)'}}>
      {/* Profile Circle */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white text-base font-bold shadow-md">
        {getInitials(userInfo.fullName)}
      </div>

      {/* Name & Logout */}
      <div className="flex flex-col items-start justify-center leading-tight">
        <span className="text-sm font-semibold text-primary truncate max-w-[120px] sm:max-w-none">
          {userInfo.fullName}
        </span>
        <button
          className="text-xs text-red-500 hover:underline mt-1"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
// import React from 'react'
// import { getInitials } from '../../utils/helper'
// const ProfileInfo = ({userInfo, onLogout}) => {
//   if(!userInfo) return ( <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />);

//   return (
//     <div className='flex items-center gap-3'>
//         <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100' >
//           {getInitials(userInfo?.fullName)}</div>
//       <div>
//         <p className='text-sm font-medium'>{userInfo.fullName}</p>
//         <button className='text-sm text-slate-700 underline' onClick={onLogout}>LOGOUT</button>
//       </div>
//     </div>
//   );
// };

// export default ProfileInfo
// import React from 'react';
// import { getInitials } from '../../utils/helper';

// const ProfileInfo = ({ userInfo, onLogout }) => {
//   if (!userInfo) {
//     return <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />;
//   }

//   return (
//     <div className="flex items-center gap-3">
//       <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-950 text-white text-sm font-semibold">
//         {getInitials(userInfo.fullName)}
//       </div>
//       <div className="flex flex-col justify-center leading-4">
//         <span className="text-sm font-medium text-gray-900">
//           {userInfo.fullName}
//         </span>
//         <button
//           className="text-xs text-red-500 hover:underline text-left"
//           onClick={onLogout}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileInfo;
