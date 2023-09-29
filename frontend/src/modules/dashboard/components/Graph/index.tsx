import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GraphBlock, H1, P, Header } from "./styles";
import { useStore } from "../../../common/useStore";

export const Graph = () => {
  const { careEventsByDate, careRecipientName } = useStore();

  return (
    <GraphBlock>
      <Header>
        <H1>{careRecipientName}'s Care Record</H1>
        <P>
          {careRecipientName} has been visited{" "}
          {Object.values(careEventsByDate)
            .map((e: any) => e.count)
            .reduce((partialSum, a) => partialSum + a, 0)}{" "}
          times by carers. 🎉
        </P>
      </Header>
      <ResponsiveContainer width="95%" height={300}>
        <AreaChart
          data={Object.values(careEventsByDate)}
          margin={{
            top: 50,
            right: 40,
            bottom: 50,
            left: 40,
          }}
        >
          <Area
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey={"date"}
            label={{
              value: "Date",
              position: "bottom",
            }}
          />
          <YAxis
            label={{
              value: "Visits per day",
              angle: -90,
              position: "insideBottomLeft",
            }}
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </GraphBlock>
  );
};

export default Graph;
