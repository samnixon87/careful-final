import { Item } from "../components/Visit/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPrescriptionBottle,
  faUtensils,
  faGlassWater,
  faEye,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

// Horrible conditional. Should really be an object
export const iconConverter = (event_type: any, key: number) => {
  if (
    event_type === "check_in" ||
    event_type === "check_out" ||
    event_type === "task_completion_reverted" ||
    event_type === "visit_completed" ||
    event_type === "task_completed" ||
    event_type === "appointment_scheduled" ||
    event_type === "daily_report_submitted"  ||
    event_type === "equipment_maintenance"
  ) {
    return (
      <Item key={key}>
        <FontAwesomeIcon icon={faList} title={event_type.replace(/_/g, " ")} />{" "}
        {event_type.replace(/_/g, " ")}
      </Item>
    );
  } else if (
    event_type === "regular_medication_taken" ||
    event_type === "regular_medication_maybe_taken" ||
    event_type === "regular_medication_partially_taken" ||
    event_type === "medication_schedule_created" ||
    event_type === "wound_care"  ||
    event_type === "medication_administered" ||
    event_type === "medication_reminder"
  ) {
    return (
      <Item key={key}>
        <FontAwesomeIcon
          icon={faPrescriptionBottle}
          title={event_type.replace(/_/g, " ")}
        />{" "}
        {event_type.replace(/_/g, " ")}
      </Item>
    );
  } else if (
    event_type === "mood_observation" ||
    event_type === "physical_health_observation" ||
    event_type === "general_observation" ||
    event_type === "mental_health_observation" ||
    event_type === "incontinence_pad_observation" ||
    event_type === "respiratory_assessment" ||
    event_type === "emotional_support" ||
    event_type === "hygiene_check" ||
    event_type === "mobility_assistance" ||
    event_type === "social_interaction" ||
    event_type === "cognitive_activity" ||
    event_type === "cognitive_assessment" ||
    event_type === "temperature_recorded" ||
    event_type === "behavior_observed" ||
    event_type === "vital_signs_taken" ||
    event_type === "pain_assessment" ||
    event_type === "emotional_support" ||
    event_type === "exercise_session" ||
    event_type === "bathing_started"
  ) {
    return (
      <Item key={key}>
        <FontAwesomeIcon icon={faEye} title={event_type.replace(/_/g, " ")} />{" "}
        {event_type.replace(/_/g, " ")}
      </Item>
    );
  } else if (
    event_type === "food_intake_observation" ||
    event_type === "meal_served"
  ) {
    return (
      <Item key={key}>
        <FontAwesomeIcon
          icon={faUtensils}
          title={event_type.replace(/_/g, " ")}
        />{" "}
        {event_type.replace(/_/g, " ")}
      </Item>
    );
  } else if (
    event_type === "alert_raised" ||
    event_type === "no_medication_observation_received" ||
    event_type === "visit_cancelled" ||
    event_type === "concern_raised" ||
    event_type === "regular_medication_not_taken" ||
    event_type === "alert_qualified" ||
    event_type === "fall_detected"  ||
    event_type === "emergency_response"
  ) {
    return (
      <Item key={key}>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          style={{ color: "#ed1d1d" }}
          title={event_type.replace(/_/g, " ")}
        />{" "}
        {event_type.replace(/_/g, " ")}
      </Item>
    );
  } else if (event_type === "fluid_intake_observation") {
    return (
      <Item key={key}>
        <FontAwesomeIcon
          icon={faGlassWater}
          title={event_type.replace(/_/g, " ")}
        />{" "}
        {event_type.replace(/_/g, " ")}
      </Item>
    );
  } else {
    return event_type;
  }
};

export const countEventTypes = (event: any) => {
  const eventTypes = Object.values(event).map((e: any) => e.event_type);
  const countedEventTypes = Array.from(
    eventTypes.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()),
    ([key, count]) => ({ key, count })
  );
  return countedEventTypes;
};

// export const sortEventObjects = (event:any) => {
//   return Object.fromEntries(Object.entries(event).sort(([,a],[,b]) => b-a)
// )};

export const createDetailsObject = (event: any) => {
  // Recreate a more concise event object
  const detailsObject = Object.values(event).map((e: any) => ({
    time: new Date(e.timestamp).toISOString(),
    event_type: e.event_type.replace(/_/g, " "),
    note: e.payload.note,
    description: e.payload.task_definition_description,
    payload: e.payload,
  }));
  // Remove duplicate check-in / check-out / completed times
  const detailsSanitised = detailsObject.reduce((unique: any, o: any) => {
    if (
      !unique.some(
        (obj: any) =>
          (obj.event_type === o.event_type &&
            (o.event_type === "check out" ||
              o.event_type === "visit completed")) ||
          (obj.event_type === o.event_type && o.time === obj.time)
      )
    ) {
      unique.push(o);
    }
    return unique;
  }, []);
  // Sort it
  detailsSanitised.sort((p1: any, p2: any) =>
    p1.time > p2.time ? 1 : p1.time < p2.time ? -1 : 0
  );
  return detailsSanitised;
};
