/** @jest-environment jsdom */

import Visit from '../src/components/Visit';
import { render, screen } from "@testing-library/react";
import {caregiver, event, careRecipientName } from '../test_data/mock'

const visit = <Visit
                key={"1"}
                caregivers={caregiver}
                careEvents={event}
                pickEvent={event}
                careRecipientName={careRecipientName}
              />

describe("Healthcheck", () => {
  it("Should render", () => {
    render(visit);
    expect(
      screen.getByText(/Linda was visited by/)
    ).toBeInTheDocument();
  });
});
