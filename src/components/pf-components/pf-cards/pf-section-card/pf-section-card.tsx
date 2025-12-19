import { cn } from "@/lib/utils";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PfSectionCardProps {
  sectionCardTitle: string;
  sectionCardAmount: string;
  isActive?: boolean;
}

const PfSectionCard = ({
  sectionCardTitle,
  sectionCardAmount,
  isActive,
}: PfSectionCardProps) => {
  return (
    <div className="my-8">
      <Card
        className={cn(
          "@container/card p-6",
          isActive && "bg-shadow-grey text-white",
        )}
      >
        <CardHeader className="gap-y-3">
          <CardDescription className="text-preset-4">
            {sectionCardTitle}
          </CardDescription>
          <CardTitle className="text-preset-1">{sectionCardAmount}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default PfSectionCard;
