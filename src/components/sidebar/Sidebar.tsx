const Sidebar = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="yoki p-2 flex items-center gap-2">
          <div>
            <img src="./logo.png" alt="logo" width={28} height={30} />
          </div>

          <div className="flex text-2xl">
            <h2>Chat</h2>
            <span className="text-[#3E9DDD] font-bold">AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
