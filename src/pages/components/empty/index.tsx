const Empty = () => {
  return (
    <div className="h-[180px] justify-center relative">
      <div className="w-[146px] h-[146px] bg-[url('@/assets/empty.png')] bg-contain bg-no-repeat"></div>
      <div className="absolute text-[#020723] leading-[14px] dark:text-white bottom-0 left-[50%] transform -translate-x-[50%]">
        No More
      </div>
    </div>
  );
};
export default Empty;
