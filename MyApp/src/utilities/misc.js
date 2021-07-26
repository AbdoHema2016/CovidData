import dayjs from 'dayjs';

const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);
export function setTestIdentifier(id) {
  return {testID: id, accessibilityLabel: id};
}
export const formatDateLocal = (date, format) => {
  return dayjs(date).format(format);
};
