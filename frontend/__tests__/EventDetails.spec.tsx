/** @jest-environment jsdom */

import EventDetails from '../src/components/EventDetails';
import { render, screen } from "@testing-library/react";
import { event, careRecipientName } from '../test_data/mock'

describe("Healthcheck", () => {
  it("Should render", () => {
    render(
      <EventDetails
      event={[event]}
      closePanel={jest.fn()}
      state={''}
      careRecipientName={careRecipientName}
    />);
    expect(
      screen.getByText(/This visit lasted from/)
    ).toBeInTheDocument();
  });
});
