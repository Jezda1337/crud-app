import "./input.style.css";

const Input = ({ type, placeholder, handleChange, title }) => {
  return (
    <>
      <label className="block w-full px-4 py-2">
        <h2 className="text-gray-500 mb-1">{title}</h2>
        <input
          className="w-full px-4 py-2 bg-gray-50 shadow-md focus:outline-none border border-transparent focus:border-blue-500"
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default Input;
