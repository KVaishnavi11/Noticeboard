import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const AddForum = () => {
  return (
    <div className="w-screen border border-slate-200 bg-slate-100">
    <div className="flex flex-row gap-10 m-8 p-4">
      <div>
        <h2 className="text-2xl font-medium text-black">Forum</h2>
      </div>
      <div>
        <NavLink end to='/AddForum'>
        <button className="w-48 border-2 border-violet-400 text-black text-xl font-medium rounded bg-violet-400">
          Add Forum<AddIcon />
        </button>
        </NavLink>
      </div>

      <div className="flex flex-row w-64 ml-48">
        <input
          type="text"
          placeholder="Search...."
          className="rounded-full border"
        />
        <SearchIcon className="absolute ml-[13vw] z-10 mt-3 " />
      </div>
    </div>
  </div>
  )
}

export default AddForum

