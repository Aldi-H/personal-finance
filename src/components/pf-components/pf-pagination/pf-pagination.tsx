import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PfPaginationProps {
  page: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
}

const PfPagination = ({
  page,
  totalPages,
  onPageChange,
}: PfPaginationProps) => {
  // eslint-disable-next-line unicorn/no-null
  if (totalPages <= 1) return null;

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    onPageChange(pageNumber);
  };

  return (
    <Pagination className="w-full pt-6">
      <div className="flex w-full items-center justify-between">
        {/* Prev */}
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goToPage(page - 1);
              }}
              className={
                page === 1
                  ? "pointer-events-none opacity-50"
                  : "border-shadow-grey text-shadow-grey hover:border-rosy-granite hover:bg-rosy-granite hover:text-white"
              }
            />
          </PaginationItem>
        </PaginationContent>

        {/* Pages */}
        <PaginationContent className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <PaginationItem key={number}>
                <PaginationLink
                  href="#"
                  isActive={number === page}
                  className="border-shadow-grey font-normal text-shadow-grey hover:border-rosy-granite hover:bg-rosy-granite hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(number);
                  }}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
        </PaginationContent>

        {/* Next */}
        <PaginationContent>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goToPage(page + 1);
              }}
              className={
                page === totalPages
                  ? "pointer-events-none opacity-50"
                  : "border-shadow-grey text-shadow-grey hover:border-rosy-granite hover:bg-rosy-granite hover:text-white"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </div>
    </Pagination>
  );
};

export default PfPagination;
