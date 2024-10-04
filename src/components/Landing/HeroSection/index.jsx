import "./index.css";
import Body from "./Body/Body";

function Header() {
  return (
    <>
      <div className="Header w-full h-[850px] mt-[-80px] flex justify-center flex-wrap pt-[120px] bg-[#E3F2FD] bg-no-repeat max-xl:h-[800px] max-short:h-[700px]">
        <Body />
      </div>
    </>
  );
}

export default Header;
