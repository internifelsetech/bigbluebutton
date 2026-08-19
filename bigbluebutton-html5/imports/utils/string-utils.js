import sanitize from 'sanitize-html';

export const capitalizeFirstLetter = (s = '') => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Returns a string in the format 'Year-Month-Day_Hour-Minutes'.
 * @param {Date} [date] - The Date object.
 */
export const getDateString = (date = new Date()) => {
  const hours = date.getHours().toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const month = (date.getMonth() + 1).toString().padStart(2, 0);
  const dayOfMonth = date.getDate().toString().padStart(2, 0);
  const time = `${hours}-${minutes}`;
  const dateString = `${date.getFullYear()}-${month}-${dayOfMonth}_${time}`;
  return dateString;
};

export const stripTags = (text) => sanitize(text, { allowedTags: [] });

// Sanitize. See: https://gist.github.com/sagewall/47164de600df05fb0f6f44d48a09c0bd
export const escapeHtml = (text) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
};

export const unescapeHtml = (input) => {
  const e = document.createElement('textarea');
  e.innerHTML = input;
  return e.value;
};

export const formatLocaleCode = (locale) => {
  const formattedLocale = locale?.replace('_', '-').replace('@', '-');

  return {
    language: formattedLocale?.split('-')[0],
    formattedLocale,
  };
};

export const safeMatch = (regex, content, defaultValue) => {
  const regexLimit = 50000;

  if (content.length > regexLimit) return defaultValue;
  return content.match(regex) || defaultValue;
};

export const lowercaseTrim = (text) => text.trim().toLowerCase();

export const upperFirst = (string) => (string ? string.charAt(0).toUpperCase() + string.slice(1) : '');

export const uniqueId = (() => {
  let num = 0;
  return function (prefix) {
    prefix = String(prefix) || '';
    num += 1;
    return prefix + num;
  };
})();

export const stringToColor = (str) => {
  if (!str) return '#1e293b'; // default dark slate
  const palette = [
    '#F87171', '#FB923C', '#FBBF24', '#A3E635', '#4ADE80', '#34D399',
    '#2DD4BF', '#22D3EE', '#38BDF8', '#60A5FA', '#818CF8', '#A78BFA',
    '#C084FC', '#E879F9', '#F472B6', '#FB7185', '#E11D48', '#DB2777',
    '#C026D3', '#9333EA', '#7C3AED', '#4F46E5', '#2563EB', '#0284C7',
    '#0891B2', '#0D9488', '#059669', '#16A34A', '#4D7C0F', '#D97706',
    '#EA580C', '#DC2626',
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % palette.length;
  return palette[index];
};

export default {
  capitalizeFirstLetter,
  getDateString,
  stripTags,
  escapeHtml,
  unescapeHtml,
  formatLocaleCode,
  safeMatch,
  lowercaseTrim,
  upperFirst,
  uniqueId,
  stringToColor,
};
