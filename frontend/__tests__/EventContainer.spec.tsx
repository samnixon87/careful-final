/** @jest-environment jsdom */

import EventContainer from '../src/components/EventContainer';
import Visit from '../src/components/Visit';
import { render, screen } from "@testing-library/react";
import {caregiver, event, careRecipientName, key } from '../test_data/mock'
import { shallow } from 'enzyme'

const eventContainer = <EventContainer
                        careEvents={[event][0]}
                        caregivers={[caregiver][0]}
                        careRecipientName={careRecipientName}
                        isPanelOpen={true}
                        pickEvent={jest.fn()}
                      />

const visit = <Visit
                key={key}
                caregivers={caregiver!}
                careEvents={event}
                pickEvent={event}
                careRecipientName={careRecipientName}
              />

describe("Healthcheck", () => {
  it("Should render a list of visits", () => {
    const wrapper = shallow(eventContainer);
    expect(wrapper.containsMatchingElement(visit));
 });
});
