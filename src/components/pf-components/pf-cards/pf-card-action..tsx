import { type IconProps } from "@phosphor-icons/react";
import React from "react";

import { CardAction } from "@/components/ui/card";

interface PfCardActionProps {
  pfActionText?: string;
  icon?: React.ComponentType<IconProps>;
}

const PfCardAction = ({ pfActionText, icon: Icon }: PfCardActionProps) => {
  return (
    <CardAction>
      <div className="text-preset-4 flex cursor-pointer items-center gap-3 text-dim-grey">
        <span>{pfActionText}</span>{" "}
        {Icon && <Icon weight="fill" className="h-3 w-3" />}
      </div>
    </CardAction>
  );
};

export default PfCardAction;
