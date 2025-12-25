import React from "react";

interface PfPotsItemProps {
  color: string;
  itemTitle: string;
  itemAmount: string;
}

const PfPotsItem = ({ color, itemTitle, itemAmount }: PfPotsItemProps) => {
  return (
    <div className="flex flex-row items-center gap-x-4 pr-3">
      <div
        className="h-12 w-1 rounded-full bg-(--pot-bg)"
        style={
          {
            "--pot-bg": color,
          } as React.CSSProperties
        }
      />
      <div className="flex flex-col gap-y-1">
        <div className="text-preset-4 text-dim-grey">{itemTitle}</div>
        <div className="text-preset-3">{itemAmount}</div>
      </div>
    </div>
  );
};

export default PfPotsItem;
