"use client";
import { FC } from "react";
import Input from "./Input";

interface FormBuilderProps {
  schema: IInputSchema[];
}

const FormBuilder: FC<FormBuilderProps> = ({ schema }) => {
  return schema?.map((i) => <Input key={i.name} item={i} />);
};

export default FormBuilder;
