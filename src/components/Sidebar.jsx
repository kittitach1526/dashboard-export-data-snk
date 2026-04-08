export default function Sidebar() {
  return (
    <div className="bg-gray-200 mt-10">
      {/* <div className="flex justify-center mt-10">Sidebar</div> */}
      {/* <br /> */}
      <div className="ml-7 grid grid-rows-5 gap-4">
        {/* <ul>
          <li className="p-2 bg-gray-400 rounded-full flex justify-center">
            <a href="/">SSI</a>
          </li>
          <li className="p-2 bg-gray-400 rounded-full flex justify-center">
            <a href="/process">SNK</a>
          </li>
        </ul> */}
        <div className="p-2 bg-gray-400 rounded-full flex justify-center">
          SSI
        </div>
        <div className="p-2 bg-gray-400 rounded-full flex justify-center">
          SNK
        </div>
        <div className="p-2 bg-gray-400 rounded-full flex justify-center">
          Export Data
        </div>
      </div>
    </div>
  );
}
