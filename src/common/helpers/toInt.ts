/**
 * toInt Convert a string into an integer.
 *
 * Use when guaranteed the argument is not empty.
 */
function toInt(str: string): number;

/**
 * toInt Convert a string into an integer, if provided.
 *
 * Use when the argument could be undefined.
 */
function toInt(str: string | undefined): number | undefined;

/**
 * toInt Convert a string into an integer, if provided, otherwise use the default value.
 *
 * Use when the argument could be undefined but you always want to return a number.
 */
function toInt(str: string | undefined, defaultValue: number): number;

function toInt(str: string | undefined, defaultValue?: number): number | undefined {
  if (str === undefined) {
    return defaultValue;
  }
  return parseInt(str, 10);
}

export default toInt;
