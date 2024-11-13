const Footer = () => {
  return (
    <div className="text-center h-10 bg-gray-300 pt-2">
      <h4>
        Created By{" "}
        <span className="text-blue-950 font-bold font-mono">
          ❤️
          <a
            target="_blank"
          >
            Suryansh Tiwari
          </a>
        </span>
        <div className="hidden sm:inline">
          &nbsp;©️ 2023 <span className="text-red-800 font-bold">Foody</span>
        </div>
      </h4>
    </div>
  );
};

export default Footer;
