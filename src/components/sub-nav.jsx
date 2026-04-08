import { Link } from "react-router-dom";
export default function SubNav() {
  return (
    <div className="max-w-7xl mx-auto mt-0 bg-white rounded-2xl">
      <div className="grid grid-cols-4 p-4 gap-4">
        <div className="flex justify-center p-6 rounded-4xl bg-gray-200 hover:bg-blue-300">
          <Link to="#">Aircom</Link>
        </div>
        <div className="flex justify-center p-6 rounded-4xl bg-gray-200 hover:bg-blue-300">
          <Link to="#">Power</Link>
        </div>
        <div className="flex justify-center p-6 rounded-4xl bg-gray-200 hover:bg-blue-300">
          <Link to="#">Flow Sensors</Link>
        </div>

        <div className="flex justify-center p-6 rounded-4xl bg-gray-200 hover:bg-blue-300">
          <Link to="#">Flow Sensors</Link>
        </div>
      </div>
    </div>
  );
}
