const Loading = () => {
  return (
  <div className="p-3 mt-8 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ring-white/60 ring-offset- focus:outline-none focus:ring-2">
    {[...Array(8)].map((data, index) => (
      <div
        data-testid="loading"
        key={index}
        className="border-2 border-inverse-50 p-5 shadow-md min-h-[300px] max-w-[320px]">
        <div className="w-full h-[170px] p-1.75 mb-4 block bg-inverse-50 border border-inverse-50 rounded-lg" />
        <div className="w-[200px] h-[22px] mt-8 block bg-inverse-50 border border-inverse-50 rounded-lg" />
        <div className="w-[130px] h-[16px] mt-2 block bg-inverse-50 border border-inverse-50 rounded-lg" />
        <div className="flex gap-1">
          <span className="w-[60px] h-[16px] mt-2 block bg-inverse-50 border border-inverse-50 rounded-full"></span>
          <span className="w-[60px] h-[16px] mt-2 block bg-inverse-50 border border-inverse-50 rounded-full"></span>
          <span className="w-[60px] h-[16px] mt-2 block bg-inverse-50 border border-inverse-50 rounded-full"></span>
        </div>
        <div className="w-[80px] h-[16px] mt-2 block bg-inverse-50 border border-inverse-50 rounded-lg" />
      </div>
    ))}
  </div>
)}

export default Loading