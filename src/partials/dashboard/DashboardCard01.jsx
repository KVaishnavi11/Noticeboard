import React, { useState } from "react";

import DatePicker from "react-flatpickr";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";
import DragFile from "../../layouts/DragFile";
import Drag from "../../layouts/Drag";

function DashboardCard01() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div className="border-2 border-gray-200 rounded-sm w-min m-4 p-8">
      <h2 className="text-xl text-black font-medium mb-2.5">Add Notice</h2>
      <div>
        <form>
          <div className="flex flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Enter Name"
              className="w-96 rounded border-slate-400"
            />
            <div className="flex  flex-row w-96 rounded bg-white border border-slate-400 ">
              <DatePicker
                placeholder="Notice Date"
                className="h-12 w-full z-5 border-none rounded"
              />
              <CalendarMonthOutlinedIcon className="absolute  ml-[23vw] z-10 mt-3"
              />
            </div>
          </div>
          <br />
          <div className="flex flex-row gap-4 ">
            <div className="flex flex-row w-96 rounded bg-white border border-slate-400">
              <DatePicker
                placeholder="Publish Date"
                className="h-12 w-full z-5 border-none rounded"
              />
              <CalendarMonthOutlinedIcon className="absolute  ml-[23vw] z-10 mt-3" />
            </div>

            <div className="flex flex-row w-96 rounded bg-white border border-slate-400">
              <DatePicker
                disabledItemsFocusable
                placeholder="End Date"
                className="h-12 w-full z-5 border-none rounded"
              />
              <CalendarMonthOutlinedIcon className="absolute  ml-[23vw] z-10 mt-3" />
            </div>
          </div>

          <br />

          <div className="flex flex-row gap-4">
            <div>
              <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
                placeholder="Description"
                className="rounded border-slate-400"
              ></textarea>
            </div>
            <div>
              <p>For Whole School</p>
            </div>
          </div>
          <br />
          <div className="flex flex-row gap-4">
            <div className="">
              <select
                value={selectedOption}
                onChange={handleChange}
                className="w-96 rounded bg-white border border-slate-400"
              >
                <option value="">Groups</option>
                <option value="option1">Class-1</option>
                <option value="option2">Class-2</option>
                <option value="option3">Class-3</option>
                <option value="option4">Class-4</option>
                <option value="option5">Class-5</option>
                <option value="option6">Class-6</option>
              </select>
            </div>
            <div></div>
          </div>
          <br />
          <div className="flex flex-row gap-4">
            <Drag />
          </div>

          <button
            type="submit"
            className="w-32 border-2 border-violet-400 text-black text-xl font-medium m-4 p-1 rounded bg-violet-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashboardCard01;
