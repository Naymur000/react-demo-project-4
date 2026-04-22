

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-mono">
        Assalamu Alaikum <br />
        <span className="text-4xl font-semibold">Naymur 😎</span>
      </h1>
      <button className="bg-cyan-600 text-white px-5 py-2 font-bold rounded-2xl">Log out</button>
    </div>
  );
};

export default Header;
