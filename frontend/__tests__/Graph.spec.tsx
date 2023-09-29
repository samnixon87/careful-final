/** @jest-environment jsdom */

import Graph from '../src/components/Graph';
import { render, screen } from "@testing-library/react";
import {careEventsByDate, careRecipientName } from '../test_data/mock'

describe("Healthcheck", () => {
  it("Should render", () => {
    render(
      <Graph
        careRecipientName={careRecipientName}
        careEventsByDate={careEventsByDate}
      />
    );
    expect(
      screen.getByText(/Linda's Care Record/)
    ).toBeInTheDocument();
  });
});
