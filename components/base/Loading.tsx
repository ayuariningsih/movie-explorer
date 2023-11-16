const Loading = () => {
  return (
  <div className="rounded-xl bg-white p-3 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ring-white/60 ring-offset- focus:outline-none focus:ring-2">
    {[...Array(8)].map((data, index) => (
      
      <div
        key={index}
        className="border-2 border-grey-900 p-5 shadow-md rounded-lg min-h-[370px] max-w-[320px] bg-[length:320px_200px]">
        <div className="w-full h-[170px] p-1.75 mb-4 block bg-gray-300/75 border border-gray-300 rounded-lg" />
        <div className="w-[200px] h-[25px] mt-8 block bg-gray-300/75 border border-gray-300 rounded-lg" />
        <div className="w-[130px] h-[20px] mt-2 block bg-gray-300/75 border border-gray-300 rounded-lg" />
        <div className="flex gap-1">
          <span className="w-[60px] h-[20px] mt-2 block bg-gray-300/75 border border-gray-300 rounded-full"></span>
          <span className="w-[60px] h-[20px] mt-2 block bg-gray-300/75 border border-gray-300 rounded-full"></span>
          <span className="w-[60px] h-[20px] mt-2 block bg-gray-300/75 border border-gray-300 rounded-full"></span>
        </div>
        <div className="w-[80px] h-[20px] mt-2 block bg-gray-300/75 border border-gray-300 rounded-lg" />
      </div>
    ))}
  </div>
)}

export default Loading