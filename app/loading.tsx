"use client";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen container">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="border-4 border-main border-t-transparent border-dotted rounded-full w-20 h-20 animate-spin"></div>
      </div>
    </div>
  )
}

export default Loading
