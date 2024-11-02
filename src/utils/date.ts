export function formatISODateToLocaleString(isoDate: string) {
  const date = new Date(isoDate);
  const locale: Intl.LocalesArgument = 'pt-BR';

  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  const monthName = date.toLocaleDateString(locale, options);
  const year = date.getFullYear();

  return `${monthName}, ${year}`;
}
