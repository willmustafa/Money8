import { formatISO, lastDayOfMonth } from 'date-fns';

export function getLastDayOfMonth(date: string | Date): string {
  if (!date) return date;
  return formatISO(lastDayOfMonth(new Date(date)));
}
