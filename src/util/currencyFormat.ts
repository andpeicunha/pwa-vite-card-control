import { formatValue } from 'react-currency-input-field';

export function formatMoney(value: string, prefix = 'R$ ') {
  return formatValue({
    value,
    groupSeparator: ',',
    decimalSeparator: '.',
    prefix,
  });
}
