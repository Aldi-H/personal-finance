import React from "react";

import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

interface PfInputProps {
  label: string;
  children: React.ReactNode;
  htmlFor?: string;
  helperText?: string;
}

const PfInput = ({ label, children, htmlFor, helperText }: PfInputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <Label
        htmlFor={htmlFor}
        className="text-preset-5 font-bold text-dim-grey"
      >
        {label}
      </Label>

      <InputGroup>{children}</InputGroup>

      {helperText && (
        <span className="text-preset-5 self-end text-dim-grey">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default PfInput;
