import { InputHTMLAttributes } from "react";

export interface ITextFieldInputProps extends InputHTMLAttributes<HTMLInputElement>{
   name: string;
   label: string;
   value: any;
   hasError?: boolean;
   error?: string;
}