import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      key: 1,
      date: 1111111,
      description: "Stub description 1",
      icon: "stubIcon1",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      key: 2,
      date: 2222222,
      description: "Stub description 2",
      icon: "stubIcon2",
      temperature: {
        max: 24,
        min: 13,
      },
    },
  ];

  it('renders correctly', () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(<ForecastSummaries forecasts={validProps} />);
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
