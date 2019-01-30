/**
 * An exception indicating a DOWNSTREAM http error status.
 *
 * This is NOT for external resources which returned a HTTP error while
 * loading: this is for code which encounters an error and wants to tell the
 * upstack handlers that it could be expressed as a HTTP error with a specific
 * status code. If you don't use this class but just throw a generic error, it
 * will eventually lead to a 500 with "Internal server error" message.
 * Sometimes, you want a different code and / or message to be displayed to the
 * user: that's when you use this class. The upstream HTTP method handler has a
 * try / catch which specially checks for errors of this type and communicates
 * them downstream accordingly.
 */
export default class HTTPError extends Error {

  /**
   * DOWNSTREAM http error with specific error status code and custom error
   * message.
   *
   * SECURITY WARNING: NO PRIVATE DATA IN THE USER MESSAGE PARAM!
   *
   * The reason for the distinction is that exceptions are a common security
   * leak of private data (user data, paths, debug info, trace IDs, etc) to the public.
   *
   * The user message is passed directly to express' response.send(), so any
   * type supported there is fine.
   *
   * @param status the HTTP status
   * @param userMessage message to display to the general public. No private / system / debug data here!
   */
  constructor(status: number, userMessage: any);

  /**
   * DOWNSTREAM http error with specific error status code, custom message and
   * private message.
   *
   * SECURITY WARNING: NO PRIVATE DATA IN THE USER MESSAGE PARAM!
   *
   * The reason for the distinction is that exceptions are a common security
   * leak of private data (user data, paths, debug info, trace IDs, etc) to the public.
   *
   * The user message is passed directly to express' response.send(), so any
   * type supported there is fine.
   *
   * @param status the HTTP status
   * @param userMessage message to display to the general public. No private / system / debug data here!
   * @param privateMessage a more verbose, system-level exception message, with debug data etc.
   */
  constructor(status: number, userMessage: any, privateMessage: string);

  constructor(public status: number, public userMessage: any, privateMessage?: string) {
    super(privateMessage || `HTTP ${status}: ${userMessage}`);
  }
}
