import { DateArg, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: DateArg<Date> & {}, formatStr: string) {
  const formattedDate = format(date, formatStr, {
    locale: ptBR,
  });

  return formattedDate;
}
