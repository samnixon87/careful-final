import Select from "react-select";
import { EventBlock, InputBox, P } from "./styles";
import { useNavigate } from "react-router-dom";
import { useStore } from '../../../common/useStore'


const NameSelector: React.FC<IProps> = () => {
  const navigate = useNavigate();
  const { careRecipients, setId, setCareRecipientName} = useStore();

  //  Handlers
  const handleChange = (e: any) => {
    setCareRecipientName(e.value);
    localStorage.setItem("name", e.value);
    handleSubmit(e);
  };

  const handleSubmit = (e: any) => {
    const specificCareRecipient = Object.values(careRecipients!).find(
      (obj: any) => {
        return obj.name === e.value;
      }
    );
    if (specificCareRecipient) {
      localStorage.setItem("id", specificCareRecipient.id);
      setId(specificCareRecipient.id);
      navigate(`/events/${e.value}`);
    }
  };

  const options = careRecipients
    ? careRecipients!.map((recipient: any) => ({
        value: recipient.name,
        label: recipient.name,
      }))
    : [];

  return (
    <EventBlock>
      <h1>Access care information</h1>
      <P>
        From physical wellbeing and daily mood, to medications and food intake,
        understand what’s going on, as it happens.
      </P>
      <P>Access care information below.</P>
      <InputBox>
        <Select onChange={handleChange} options={options} />
      </InputBox>
    </EventBlock>
  );
};
export default NameSelector;
