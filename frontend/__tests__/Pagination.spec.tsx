/** @jest-environment jsdom */

import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from '../src/components/Pagination';

const pagination = <Pagination
                      page={0}
                      handleNext={jest.fn()}
                      handlePrevious={jest.fn()}
                    />

describe("Healthcheck", () => {
  it("Should render next", () => {
    render(pagination);
    expect(
      screen.getByText(/Previous/)
    ).toBeInTheDocument();
  });
  it("Should render previous", () => {
    render(pagination);
    expect(
      screen.getByText(/Next/)
    ).toBeInTheDocument();
  });
});
