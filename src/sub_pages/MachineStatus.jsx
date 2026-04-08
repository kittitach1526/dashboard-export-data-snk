import { ProgressBar } from "../components/Progressbar";
import { CircularGauge } from "../components/CircularGauge";
export default function MachineStatus() {
  return (
    <div className="rounded-2xl ml-5">
      <div className="mt-5">
        <span className="flex justify-center">Machine Status</span>
      </div>

      <div className="mt-4 p-4 bg-gray-400 rounded-4xl p-2">
        <div className="flex ml-10">
          <h1>Inbound</h1>
        </div>
        <div className="grid grid-cols-4 mt-5">
          <div className="col-span-1">
            <div className="flex -mt-7">
              <CircularGauge
                value={25}
                startAngle={90}
                title="25%"
                subtitle="OEE"
              />
            </div>

          </div>
          <div className="col-span-2">
            <div>
              <div className="p-2">
                <ProgressBar progress={50} color="bg-red-500" />
              </div>
              <div className="p-2">
                <ProgressBar progress={50} color="bg-red-500" />
              </div>
              <div className="p-2">
                <ProgressBar progress={50} color="bg-red-500" />
              </div>
              <div className="p-2">
                <ProgressBar progress={50} color="bg-red-500" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div>unit</div>
            <div>unit</div>
            <div>unit</div>
            <div>unit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
