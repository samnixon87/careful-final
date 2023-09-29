/** @jest-environment jsdom */

import CareRecord from '../src/components/CareRecord';
import Graph from '../src/components/Graph';
import { render } from "@testing-library/react";
import { careRecipientName, id, caregiver, event, careEventsByDate} from '../test_data/mock'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'

const careRecord = <CareRecord
                      careRecipientName={careRecipientName}
                      setCareRecipientName={jest.fn()}
                      caregivers={caregiver}
                      id={id}
                    />

const graph = <Graph
                careEventsByDate={careEventsByDate}
                careRecipientName={careRecipientName}
              />

describe("Healthcheck", () => {
  it("Should render", () => {
    render(careRecord);
  });
  it("Should render at least the graph when loaded", () => {
     const wrapper = shallow(careRecord);
     expect(wrapper.containsMatchingElement(graph))
  });
});
