/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import {careRecipient, careRecipientName } from '../test_data/mock'
import NameSelector from '../src/components/NameSelector';

describe("Healthcheck", () => {
  it("Renders successfully", () => {
    render(
      <BrowserRouter>
        <NameSelector
          careRecipients={careRecipient}
          careRecipientName={careRecipientName}
          setCareRecipientName={jest.fn()}
          setId={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/Access care information/)
    ).toBeInTheDocument();
  });
});
