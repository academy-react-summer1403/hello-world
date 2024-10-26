import React from "react";

function GoTop() {
  return (
    <div className="w-full flex justify-center items-end mt-5 mb-[-100px]">
      <a href="#backToTop">
        <button
          class="bg-[#e7f4ff] text-center w-[500px] rounded-2xl h-12 relative text-black text-xl font-semibold group"
          type="button"
        >
          <div class="bg-[#94cdff] rounded-xl h-10 w-[50px] flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[490px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25px"
              width="25px"
              className="rotate-90"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#000000"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <p class="translate-x-2 mt-2 text-[18px]">برگرد به بالا</p>
        </button>
      </a>
    </div>
  );
}

export default GoTop;
