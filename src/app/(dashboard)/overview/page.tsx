import PfBudgetsCard from "@/components/pf-components/pf-cards/pf-budgets-card/pf-budgets-card";
import PfPotsCard from "@/components/pf-components/pf-cards/pf-pots-card/pf-pots-card";
import PfSectionCard from "@/components/pf-components/pf-cards/pf-section-card/pf-section-card";
import PfTransactionsCard from "@/components/pf-components/pf-cards/pf-transactions-card/pf-transactions-card";
import { PfTransactionsColumns } from "@/components/pf-components/pf-cards/pf-transactions-card/pf-transactions-columns";
import { PfTransactionsColumnsInterface } from "@/components/pf-components/pf-cards/pf-transactions-card/transactions-interface";
import PfPageHeader from "@/components/pf-components/pf-header/pf-page-header";

const data: PfTransactionsColumnsInterface[] = [
  {
    id: "1",
    transactionName: "Emma Richardson",
    transactionDate: "19 Aug 2024",
    transactionCategory: "person",
    transactionAmount: "$75.50",
    type: "income",
    // icon: "UserIcon", // This comes from database
  },
  {
    id: "2",
    transactionName: "Savory Bites Bistro",
    transactionDate: "19 Aug 2024",
    transactionCategory: "restaurant",
    transactionAmount: "$55.50",
    type: "expense",
    icon: "ForkKnifeIcon", // This comes from database
  },
  {
    id: "3",
    transactionName: "Daniel Carter",
    transactionDate: "18 Aug 2024",
    transactionCategory: "person",
    transactionAmount: "$42.30",
    type: "expense",
    icon: "UserIcon",
  },
  {
    id: "4",
    transactionName: "Sun Park",
    transactionDate: "17 Aug 2024",
    transactionCategory: "person",
    transactionAmount: "$120.00",
    type: "income",
    // icon: "UserIcon",
  },
  {
    id: "5",
    transactionName: "Urban Services Hub",
    transactionDate: "17 Aug 2024",
    transactionCategory: "service",
    transactionAmount: "$65.00",
    type: "expense",
    icon: "SuitcaseSimpleIcon",
  },
];

const PageOverview = () => {
  return (
    <div>
      <PfPageHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-3 @5xl/main:grid-cols-3 dark:*:data-[slot=card]:bg-card">
              <PfSectionCard
                isActive={true}
                sectionCardTitle="Current Balance"
                sectionCardAmount="$4,836.00"
              />
              <PfSectionCard
                sectionCardTitle="Income"
                sectionCardAmount="$3,814.25"
              />
              <PfSectionCard
                sectionCardTitle="Expenses"
                sectionCardAmount="$1,700.50"
              />
            </div>
            <div>
              <div className="grid grid-cols-[3fr_2fr] gap-6">
                <div className="flex flex-col gap-6">
                  <PfPotsCard />
                  <PfTransactionsCard
                    columns={PfTransactionsColumns}
                    data={data}
                  />
                  <div className="bg-navy-grey">Transaction1</div>
                </div>
                <div className="flex flex-col gap-6">
                  <PfBudgetsCard />
                  <div className="bg-navy-grey">Recurring Bills</div>
                </div>
              </div>
              <div>{/* Placeholder for future content */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOverview;
