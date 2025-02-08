"use client";
import { useState } from "react";
import FormBuilder from "./components/FormBuilder";
import { formSchema } from "./config/constructors";

export default function Home() {
  const [result, setResult] = useState<IResult[]>([]);

  const handleAction = (formData: FormData) => {
    const result: IResult[] = [];
    for (const pair of formData.entries()) {
      result.push({ key: pair[0], value: pair[1] as string });
    }
    setResult(result);
  };
  return (
    <div className="container mx-auto">
      <>
        <form action={handleAction}>
          <FormBuilder schema={formSchema} />
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-md text-white"
          >
            submit
          </button>
        </form>
        <br />
        <div dir="ltr">
          Result:
          <br />
          {result.map((i) => (
            <div key={i.key}>
              {i.key}: {i.value}
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
