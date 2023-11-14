const Loading = () => {
  return (
  <div className="mx-auto w-full max-w-xl rounded-2xl bg-white mb-3">
    {[...Array(5)].map((data, index) => (
      <input
        key={index}
        className="w-full p-1.75 mb-4 block bg-gray-300/75 border border-gray-300 rounded-lg"
      />
    ))}

    
  </div>
)}

export default Loading