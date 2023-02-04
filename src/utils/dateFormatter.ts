import dayjs from 'dayjs';

export function dateFormatter(date: string) {
  return dayjs(new Date(date)).format('DD/MM/YYYY');
}
