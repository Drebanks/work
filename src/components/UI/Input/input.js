import { useState } from "react";
import Image from "next/image";

export const Input = ({
  label,
  type,
  placeholder,
  name,
  value,
  svg,
  svg2,
  svg3,
  onChange,
  isValid,
  smallInfo,
  errorMessage,
}) => {
  const [error, setError] = useState(true);
  const [password, setPassword] = useState(false);
  const handlePassword = () => {
    setPassword(!password);
  };

  return (
    <label className="flex flex-col mb-4">
      <p className="font-Regular text-sm font-semibold leading-[30px] text-white">
        {label}
      </p>
      <div className="relative">
        {svg && <Image src={svg} alt="show" className="image" />}
        <input
          type={type === "password" && password ? "text" : type}
          placeholder={placeholder}
          name={name}
          value={value}
          onBlur={() => (isValid ? setError(true) : setError(false))}
          className={`inside py-[1rem] px-[4rem] ${
            !error && "border-[2px] border-red"
          }`}
          onChange={onChange}
        />
        {svg2 && <Image src={password ? svg3 : svg2} alt="show" className="image" onClick={handlePassword} />}
        {smallInfo && <p className="text-lightGren font-regular font-semibold leading-[24px] text-[12px]">{smallInfo}</p>}
        {!error ? (<p className="text-red font-regular font-semibold leading-[24px] text-[12px]">{errorMessage}</p>) : ""}
      </div>
    </label>
  );
};





