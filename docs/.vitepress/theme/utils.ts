/**
 * Converts an ISO 8601 string to a human-readable format for a specific timezone.
 * @param isoString The ISO 8601 timestamp string (e.g., "2023-07-11T16:53:00.000Z").
 * @returns A formatted, human-readable date and time string.
 */
export function formatTimestamp(isoString: string): string {
  const date = new Date(isoString);

  // Define formatting options. 'long' gives "July 11, 2023".
  // 'medium' gives "11:53:00 PM".
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: 'long',
    // timeStyle: 'medium',
    timeZone: 'Asia/Jakarta', // Converts the time to Western Indonesia Time (WIB)
  };

  // Create a formatter for the Indonesian locale ('id-ID') and format the date.
  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
}