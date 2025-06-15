import React from 'react';

const Navbar = () => {
  return (
    <nav className="backdrop-blur-sm bg-[#0f202780] text-white py-3 px-6 flex justify-between items-center shadow-md rounded-b-xl border-b border-white/10">
      <div className="logo font-extrabold tracking-wider flex gap-x-1">
        <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="33" viewBox="0 0 48 48">
  {/* Black Path */}
  <path fill="#000000" d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z"></path>

  {/* White Path */}
  <path fill="#ffffff" d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z"></path>
</svg>
</span>
        <span className="text-shadow-fuchsia-200 text-xl md:text-3xl">DailyRush</span>
      </div>
      <ul className="flex gap-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-[#58a6ff] transition-all">Home</li>
        <li className="cursor-pointer hover:text-[#58a6ff] transition-all">Your Tasks</li>
      </ul>
    </nav>
  );
};

export default Navbar;
