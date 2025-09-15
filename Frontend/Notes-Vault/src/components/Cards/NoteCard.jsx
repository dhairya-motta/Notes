import moment from 'moment';
import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md';

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
  <div className="glass-card flex flex-col justify-between h-full p-5 mb-4" style={{borderRadius:'1.25rem', boxShadow:'0 8px 32px 0 rgba(31,38,135,0.10)', background:'rgba(255,255,255,0.85)', backdropFilter:'blur(8px)'}}>
      {/* Title + Date + Pin */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex flex-col">
          <h6 className="text-lg font-bold text-primary break-words">{title}</h6>
          <span className="text-xs text-gray-500 mt-1">{moment(date).format('Do MMM YYYY')}</span>
        </div>
        <MdOutlinePushPin
          className={`text-2xl cursor-pointer transition-colors ${isPinned ? 'text-accent' : 'text-gray-300'} hover:text-accent`}
          onClick={onPinNote}
        />
      </div>

      {/* Content */}
      <p className="text-base text-gray-700 mt-2 mb-2 line-clamp-3" style={{wordBreak:'break-word'}}>
        {content?.slice(0, 120)}
        {content?.length > 120 && '...'}
      </p>

      {/* Tags + Icons */}
      <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
        <div className="flex flex-wrap text-xs text-secondary gap-2">
          {tags.map((item) => (
            <span key={item} className="bg-secondary bg-opacity-10 px-2 py-1 rounded-full truncate max-w-[100px]">
              #{item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <MdCreate
            className="text-2xl text-accent cursor-pointer hover:text-green-500 transition"
            onClick={onEdit}
          />
          <MdDelete
            className="text-2xl text-accent cursor-pointer hover:text-red-500 transition"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

// import moment from 'moment';
// import React from 'react'
// import { MdOutlinePushPin } from 'react-icons/md';
// import { MdCreate,MdDelete } from 'react-icons/md';

// const NoteCard = ({title,date,content,tags,isPinned,onEdit,onDelete,onPinNote}) => {
//   return (
//     <div className='border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
//       <div className='flex items-center justify-between'>
//         <div> 
//             <h6 className='text-sm font-medium'>{title}</h6>
//             <span className='text-xs text-slate-500'>{moment(date).format('Do MMM YYYY')}</span>
//         </div>
//         <MdOutlinePushPin className={`text-xl cursor-pointer hover:text-primary ${isPinned ? 'text-primary' : 'text-slate-300'}`} onClick={onPinNote}/>


//       </div>
//       <p className='text-xs text-slate-600 mt-2'>{content?.slice(0,60)}</p>
//      <div className='flex items-center justify-between mt-2'>
//   <div className='text-xs text-slate-500 flex gap-1'>
//     {tags.map((item) => (
//       <span key={item}>#{item}</span>
//     ))}
//   </div>
//   <div className='flex items-center gap-2'>
//     <MdCreate
//       className='text-xl text-slate-300 cursor-pointer hover:text-green-600'
//       onClick={onEdit}
//     />
//     <MdDelete
//       className='text-xl text-slate-300 cursor-pointer hover:text-red-500'
//       onClick={onDelete}
//     />
//   </div>
// </div>

//     </div>
//   )
// }

// export default NoteCard
