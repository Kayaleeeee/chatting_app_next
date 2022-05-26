import { format, isSameDay } from 'date-fns';

export const formatDateToTime = (date: Date): string => {
  return format(new Date(date), 'hh:mm');
};

export const formatCreatedAtDateTime = (date: Date): string => {
  if (isSameDay(new Date(date), new Date())) {
    return format(new Date(date), 'hh:mm');
  }

  return new Date(date).toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
};
