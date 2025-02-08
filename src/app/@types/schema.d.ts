interface IInputSchema {
  title: string;
  type: InputTypeEnum;
  name: string;
  placeholder?: string;
  options?: IInputOption[];
  forms?: Record<string, IInputSchema[]>;
}

interface IInputOption {
  title: string;
  value: string;
}

interface IResult {
  key: string;
  value: string;
}
