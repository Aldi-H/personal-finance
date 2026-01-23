import { cn } from "@/lib/utils";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PfCardProps {
  pfCardTitle?: React.ReactNode;
  pfCardAction?: React.ReactNode;
  children?: React.ReactNode;
}

const PfCard = ({ pfCardTitle, pfCardAction, children }: PfCardProps) => {
  return (
    <div className="h-full">
      <Card
        className={cn(
          "@container/card rounded-xl border-none px-3 py-6 lg:p-8",
        )}
      >
        <CardHeader className="flex items-center justify-between align-middle">
          <CardTitle className="text-preset-2">{pfCardTitle}</CardTitle>
          {pfCardAction}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default PfCard;
