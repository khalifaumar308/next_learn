import Links from "./links";

const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between">
      <div className="text-[30px] font-bold">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar