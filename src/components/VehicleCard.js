// export default function VehicleCard({ name, price, image}) {
//   return (
//     <div className="group bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
//       {/* Image Section */}
//       <div className="relative h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
//         <img
//           src={image}
//           alt={name}
//           className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-lg font-semibold text-gray-900">
//           {name}
//         </h3>

//         <p className="text-gray-700 mt-1 font-medium">
//           {price}
//         </p>

//         <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }

export default function VehicleCard({ name, price, image }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image Section */}
      <div className="relative h-40 sm:h-44 md:h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
          {name}
        </h3>

        <p className="text-gray-700 mt-1 font-medium text-sm sm:text-base">
          {price}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
          Book Now
        </button>
      </div>
    </div>
  );
}
