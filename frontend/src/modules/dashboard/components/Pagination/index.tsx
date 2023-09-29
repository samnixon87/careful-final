import { Button, Container } from "./styles";
import { useStore } from "../../../common/useStore";

export const Pagination = () => {
  const { page, setPage, setIsLoading } = useStore();

  // Pagination setters
  const handlePrevious = () => {
    setPage(page - 1);
    setIsLoading(true);
  };

  const handleNext = () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  return (
    <>
      <Container>
        <Button disabled={page === 0} onClick={handlePrevious}>
          Previous
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </Container>
    </>
  );
};

export default Pagination;
