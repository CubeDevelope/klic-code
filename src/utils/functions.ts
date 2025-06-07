/**
 * capitalize
 * Capitalizes the first letter of the given string.
 *
 * @param str - The string to capitalize
 * @returns The string with the first letter in uppercase
 */
const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

/**
 * slugify
 * Converts a string into a URL-friendly slug.
 * Steps:
 * 1. Inserts spaces between camelCase words
 * 2. Converts the string to lowercase
 * 3. Replaces non-alphanumeric characters with dashes
 * 4. Trims leading and trailing dashes
 *
 * @param str - The string to convert into a slug
 * @returns The generated slug
 */
const slugify = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
    
export {capitalize, slugify}