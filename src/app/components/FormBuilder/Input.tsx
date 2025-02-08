"use client";
import { InputTypeEnum } from "@/app/@types/enum";
import { ChangeEventHandler, FunctionComponent, useState } from "react";
import FormBuilder from "./FormBuilder";

interface InputProps {
  item: IInputSchema;
}

const Input: FunctionComponent<InputProps> = ({ item }) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedOption(e.target.value);
  };

  return item.type === InputTypeEnum.SELECT ? (
    <>
      <div className="grid grid-cols-3 gap-4">
        <label htmlFor={item.name}>{item.title}</label>
        <select
          value={selectedOption}
          onChange={handleChange}
          id={item.name}
          name={item.name}
          className="col-span-2 border-2 border-solid border-s-black p-2"
        >
          {item.options === undefined
            ? null
            : item.options.map((i) => (
                <option key={i.value} value={i.value}>
                  {i.title}
                </option>
              ))}
        </select>
      </div>
      <br />
      {item.forms !== undefined && selectedOption !== undefined ? (
        <FormBuilder schema={item.forms[selectedOption]} />
      ) : null}{" "}
    </>
  ) : (
    <div className="grid grid-cols-3 gap-4">
      <label htmlFor={item.name}>{item.title}</label>
      <input
        type="text"
        placeholder={item.placeholder}
        id={item.name}
        name={item.name}
        className="col-span-2 border-2 border-solid border-s-black p-2"
      />{" "}
      <br />
    </div>
  );
};

export default Input;
