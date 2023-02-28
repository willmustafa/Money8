import { formatISO, lastDayOfMonth, format, subMonths } from 'date-fns';

export function getLastDayOfMonth(date: string | Date): string {
  if (!date) return date;
  return formatISO(lastDayOfMonth(new Date(date)));
}

export function getFirstDayOfMonth(date: string | Date): string {
  if (!date) return date;
  const firstDate = format(new Date(date), 'yyyy-MM-01');
  return `${firstDate}T00:00:00-03:00`;
}

export function subtractOneMonth(date: string): string {
  if (!date) return date;
  return format(subMonths(new Date(date), 1), 'yyyy-MM-dd');
}
