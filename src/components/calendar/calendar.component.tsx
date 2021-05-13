import { useRef, useState, useEffect, MouseEvent } from "react";
import moment from "moment";
import * as S from "./calendar.styles";
import { CalendarInterface } from "./calendar.definition";
import {
  firstDayOfMonth,
  daysInMonth,
} from "../../helpers/getMonthData.helpers";
import { createCalendarCell } from "../../helpers/getCalendarCell.helper";

export const Calendar = ({ month = 1, year = 2021 }: CalendarInterface) => {
  // ref
  const cellRef = useRef<HTMLTableDataCellElement>(null);
  // state
  const [cellWidth, setCellWidth] = useState<number>(1);
  // variables
  const weekDayShort: string[] = moment.weekdaysShort();
  const dateObject: moment.Moment = moment().set({
    year: year,
    month: month - 1,
  });
  const monthName: string = moment(dateObject).format("MMMM");
  const currentDay: number = parseInt(dateObject.format("D"));

  // creates the initial blank cells before day 1 of the month
  const blankCells: JSX.Element[] = [];
  for (let i = 0; i < firstDayOfMonth(dateObject); i++) {
    blankCells.push(
      createCalendarCell({
        key: `start${i}`,
        className: `calendar-day empty`,
        ref: cellRef,
        cellWidth: cellWidth,
        content: "",
      })
    );
  }

  const onDayClick = (event: MouseEvent, props: string) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("cell click = ", event);
    console.log("props =", props);
  };

  // cells created for the days of the month
  const dayCells = [];
  for (let day = 1; day <= daysInMonth(month, year); day++) {
    let isCurrentDay = day === currentDay ? "today" : "";
    dayCells.push(
      createCalendarCell({
        key: `cell${day}`,
        className: `calendar-day ${isCurrentDay}`,
        ref: cellRef,
        cellWidth: cellWidth,
        content: `${day}`,
        onClick: (event: MouseEvent, props: string) => onDayClick(event, props),
      })
    );
  }

  // combines the first blank cells and day cells
  const totalCells = [...blankCells, ...dayCells];
  let rows: JSX.Element[][] = [];
  let cells: JSX.Element[] = [];

  totalCells.forEach((cell: JSX.Element, index) => {
    if (index % 7 !== 0) {
      cells.push(cell);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(cell);
    }
    if (index === totalCells.length - 1) {
      rows.push(cells);
    }
  });

  // competes the final row with additional blank cells for completion
  if (rows[rows.length - 1].length < 7) {
    let filledCells = rows[rows.length - 1].length;

    while (filledCells < 7) {
      rows[rows.length - 1].push(
        createCalendarCell({
          key: `end${filledCells}`,
          className: "calendar-day empty",
          ref: cellRef,
          cellWidth: cellWidth,
          content: "",
        })
      );
      filledCells++;
    }
  }

  // gets the cell width to define the cell height in styles.
  useEffect(() => {
    if (cellRef.current) {
      const width: number = cellRef.current.offsetWidth;
      setCellWidth(width);
    }
  }, []);

  // render
  return (
    <S.CalendarWrapper className="calendar-component">
      <S.StyledTable>
        <caption>
          <h3>{monthName}</h3>
        </caption>
        <thead>
          <tr>
            {weekDayShort.map((day, index) => {
              return (
                <th key={`day${index}`} className="week-day">
                  {day}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((day, index) => {
            return <tr key={`row${index}`}>{day}</tr>;
          })}
        </tbody>
      </S.StyledTable>
    </S.CalendarWrapper>
  );
};
