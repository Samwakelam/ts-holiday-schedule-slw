import styled from "styled-components";

export const CalenderMonth = styled.caption`
  border: 1px solid green;
`;

export const CalendarWrapper = styled.div`
  border: 1px solid red;
  width: fit-content;
`;

export const DayCell = styled.td<{ cellWidth: number }>`
  background-color: palegreen;
  width: 100px;
  height: ${(props) => `${props.cellWidth * 1.5}px` || "auto"};

  &:hover {
    background-color: lightsalmon;
  }

  &.empty {
    background-color: lightgrey;
  }

  &.today {
    background-color: lightcoral;
  }

  &.today:hover {
    background-color: coral;
  }
`;

export const StyledTable = styled.table`
  border: 1px solid blue;
  /* width: 100%; */
`;
