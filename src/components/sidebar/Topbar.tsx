import { RiMenuUnfold3Line, RiMenuUnfold4Line } from "react-icons/ri";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  //   const aimodal = [
  //     { name: "Neural Nexus", feature: "Quantum Core v3.8" },
  //     { name: "Cerebral Prime", feature: "Advanced Reasoning v2.1" },
  //     { name: "Synapse Ultra", feature: "Creative Engine v4.0" },
  //     { name: "Logic Core", feature: "Fast Response v1.5" },
  //   ];

  return (
    <div className="h-14 px-4 py-8 border-b border-[#E5E7EB] flex items-center bg-white">
      {/* LEFT */}
      <div
        onClick={onClickSideBar}
        className="px-1 py-1 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        {sidebar ? (
          <RiMenuUnfold3Line size={22} />
        ) : (
          <RiMenuUnfold4Line size={22} />
        )}
      </div>

      {/* RIGHT - AI ENGINE */}
      <div className="px-4 relative">
        <div className="flex items-center gap-2 bg-[#f2f2f6] px-3 py-2 rounded cursor-pointer">
          <img src="./icon.png" alt="logo" className="size-6" />
          <span className="px-1 text-base">model name</span>
          {/* {modelOpen ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
