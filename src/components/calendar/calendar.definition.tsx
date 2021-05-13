export interface CalendarInterface {
  month?: number;
  year?: number;
}

export interface CellInterface {
  key: string;
  className: string;
  ref: React.RefObject<HTMLTableDataCellElement>;
  cellWidth: number;
  content: string;
  onClick?: Function;
}
