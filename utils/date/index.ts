import { format } from 'date-fns';

export const formatDateToTime = (date: Date): string => {
  return format(new Date(date), 'hh:mm');
};
