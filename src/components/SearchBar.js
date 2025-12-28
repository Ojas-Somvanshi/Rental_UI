// export default function SearchBar() {
//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 mx-auto max-w-5xl -mt-10 relative z-10">
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

//         {/* Vehicle Type */}
//         <select className="border p-3 rounded-md text-black">
//           <option value="bike">Bike</option>
//           <option value="car">Car</option>
//           <option value="Scooty">Scooty</option>
//         </select>

//         {/* Location */}
//         <input
//           type="text"
//           placeholder="Location"
//           className="border p-3 rounded-md text-black placeholder-gray-500"
//         />

//         {/* Start Date */}
//         <input
//           type="date"
//           className="border p-3 rounded-md text-black"
//         />

//         {/* End Date */}
//         <input
//           type="date"
//           className="border p-3 rounded-md text-black"
//         />

//         {/* Search Button */}
//         <button className="bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
//           Search
//         </button>

//       </div>
//     </div>
//   );
// }

export default function SearchBar() {
  return (
    <div className="bg-white shadow-2xl ring-1 ring-black/5 rounded-xl p-4 sm:p-6 mx-auto max-w-7xl w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

        {/* Vehicle Type */}
        <select className="border p-3 rounded-md text-black w-full">
          <option value="bike">Bike</option>
          <option value="car">Car</option>
          <option value="Scooty">Scooty</option>
        </select>

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          className="border p-3 rounded-md text-black placeholder-gray-500 w-full"
        />

        {/* Start Date */}
        <input
          type="date"
          className="border p-3 rounded-md text-black w-full"
        />

        {/* End Date */}
        <input
          type="date"
          className="border p-3 rounded-md text-black w-full"
        />

        {/* Search Button */}
        <button className="bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition w-full py-3">
          Search
        </button>

      </div>
    </div>
  );
}
