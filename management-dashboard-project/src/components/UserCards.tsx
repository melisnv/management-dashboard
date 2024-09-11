import Image from "next/image"

const UserCards = ({ type, number }: { type: string; number: number }) => {
  return (
    <div className="rounded-2xl odd:bg-lightgrey even:bg-darkgrey p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] px-2 py-1 rounded-full bg-white font-extrabold text-burgundy">
          2024/2025
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-extrabold my-4 text-white">{number}</h1>
      <h2 className="capitalize text-sm font-medium text-white">{type}</h2>
    </div>
  );
};

export default UserCards