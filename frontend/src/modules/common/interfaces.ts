export interface ICaregivers {
  status: string;
  results: number;
  caregiver: [{
    id: string;
    first_name: string;
    last_name: string;
  }]
}

export interface ICareRecipients {
  status: string;
  results: number;
  care_recipient: [ICareRecipient];
}

export interface ICareRecipient {
  id: string;
  name: string;
}

export interface ICaregiver {
    id: string;
    first_name: string;
    last_name: string;
}

export interface ICareEvent {
    payload: {
      id: string;
      alert_id: string;
      timestamp: string;
      event_type: string;
      care_recipient_id: string;
      observation_event_id: string;
    }
    alert_id: string;
    task_instance_id?: string;
    visit_id?: string;
    caregiver_id?: string;
    payload_as_text: string;
    rejected_event_id?: string;
    observation_event_id: string;
    timestamp: string;
    id: string;
    event_type: string;
    care_recipient_id: string;
}

export interface ICareEventsByDate {
  date: string;
  count: number;
}

export interface ICareEventSanitised {
  time: Date;
  event_type: string;
  note: string;
  description: string;
  payload: string;
}
