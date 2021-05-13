import { MouseEvent } from "react";
import * as S from "../components/calendar/calendar.styles";
import { CellInterface } from "../components/calendar/calendar.definition";

export const createCalendarCell = ({
  key,
  className,
  ref,
  cellWidth,
  content,
  date,
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
          onClick(event, date);
        }
      }}
    >
      {content}
    </S.DayCell>
  );
};
