/** @jest-environment jsdom */

import App from '../src/components/App';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'

describe("Healthcheck", () => {
  it("Should render", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
