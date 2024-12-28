import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import addIcon from "@/assets/icons/add.svg"

const HeaderLogo = () => {
  return (
    <div className="header_component">
      <div className="header_content-wrapper">
        <div className="h-full flex items-center justify-center">
          <Image className="w-auto max-w-[100%] h-[36px] lg:h-[48px]" width={120} height={48} src={logo} alt="logo" />
        </div>
        <button className="btn primary flex items-center gap-2">
          Create Task <Image src={addIcon} width={16} height={16} alt="add" />
        </button>
      </div>
    </div>
  );
};

export default HeaderLogo;
