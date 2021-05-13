import { MouseEvent } from "react";
import * as S from "../components/calendar/calendar.styles";
import { CellInterface } from "../components/calendar/calendar.definition";

export const createCalendarCell = ({
  key,
  className,
  ref,
  cellWidth,
  content,
  onClick,
}: CellInterface) => {
  return (
    <S.DayCell
      key={key}
      className={className}
      ref={ref}
      cellWidth={cellWidth}
      onClick={(event: MouseEvent<HTMLTableDataCellElement>): void => {
        if (onClick) {
          console.log("event 1 =", event.currentTarget.nodeValue);
          onClick(event, "hello");
        }
      }}
    >
      {content}
    </S.DayCell>
  );
};
