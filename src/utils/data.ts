export const donutData = [
  { label: "Industrial", value: 0 },
  { label: "Retail", value: 5 },
  { label: "Office", value: 10 },
  { label: "Vacant Land", value: 15 },
  { label: "Commercial General/Misc", value: 30 },
  { label: "Public/Semi-Public", value: 40 },
];

export const barData = [
  { label: "0-2M", value: 10 },
  { label: "2-5M", value: 15 },
  { label: "5-10M", value: 20 },
  { label: "10-30M", value: 17 },
  { label: "30M+", value: 40 },
];

export const barLineData = [
  {
    type: "bar",
    data: [
      { label: "Q1 21'", value: 60 },
      { label: "Q2 21'", value: 80 },
      { label: "Q3 21'", value: 100 },
      { label: "Q4 21'", value: 120 },
      { label: "Q1 22'", value: 100 },
      { label: "Q2 22'", value: 80 },
      { label: "Q3 22'", value: 120 },
      { label: "Q4 22'", value: 60 },
    ],
  },
  {
    type: "line",
    data: [
      { label: "Q1 21'", value: 10 },
      { label: "Q2 21'", value: 17 },
      { label: "Q3 21'", value: 40 },
      { label: "Q4 21'", value: 40 },
      { label: "Q1 22'", value: 60 },
      { label: "Q2 22'", value: 40 },
      { label: "Q3 22'", value: 80 },
      { label: "Q4 22'", value: 40 },
    ],
  },
];

export const barLineDataGrouped = [
  { label: "Q1 21'", ltv: 10, deals: 60 },
  { label: "Q2 21'", ltv: 17, deals: 80 },
  { label: "Q3 21'", ltv: 40, deals: 100 },
  { label: "Q4 21'", ltv: 40, deals: 120 },
  { label: "Q1 22'", ltv: 60, deals: 100 },
  { label: "Q2 22'", ltv: 40, deals: 80 },
  { label: "Q3 22'", ltv: 80, deals: 120 },
  { label: "Q4 22'", ltv: 40, deals: 60 },
];
