interface PfRecurringBillsItemProps {
  borderColor: string;
  billType: string;
  amount: string;
}

const PfRecurringBillsItem = ({
  borderColor,
  billType,
  amount,
}: PfRecurringBillsItemProps) => {
  return (
    <div
      className={`flex h-16 max-h-16 flex-row items-center justify-between rounded-lg border-l-4 ${borderColor} bg-parchment px-4`}
    >
      <div className="text-preset-4 text-dim-grey">{billType}</div>
      <div className="text-preset-4-bold">${amount}</div>
    </div>
  );
};

export default PfRecurringBillsItem;
