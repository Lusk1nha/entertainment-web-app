import { Control, RegisterOptions, UseFormSetValue, UseControllerProps } from "react-hook-form";

export interface IControlledProps {
  control: Control<any> | Control<any, any> | any;
  name: string;
  label: string;
  rules?: UseControllerProps["rules"];
  defaultValue?: any;
  setValue?: UseFormSetValue<any>;
}
