import CountChart from "../../../components/CountChart";
import UserCards from "../../../components/UserCards";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USERCARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="student" number={1030} />
          <UserCards type="teacher" number={342} />
          <UserCards type="parent" number={2000} />
          <UserCards type="staff" number={560} />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart/>
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="">BOTTOM CHARTS</div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">RIGHT</div>
    </div>
  );
}

export default AdminPage