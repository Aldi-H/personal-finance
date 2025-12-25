import PfPotsCard from "@/components/pf-components/pf-cards/pf-pots-card/pf-pots-card";
import PfSectionCard from "@/components/pf-components/pf-cards/pf-section-card/pf-section-card";
import PfPageHeader from "@/components/pf-components/pf-header/pf-page-header";

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
                  <div className="bg-navy-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, non?
                  </div>
                  <div className="bg-navy-grey">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor, ad?
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="bg-navy-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, qui?
                  </div>
                  <div className="bg-navy-grey">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illo, enim.
                  </div>
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
