export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">RentRide</h1>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">Vehicles</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
        <li className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md">
          Login
        </li>
      </ul>
    </nav>
  );
}
