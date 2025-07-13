/**
 * Converts an ISO 8601 string to a human-readable format for a specific timezone.
 * @param isoString The ISO 8601 timestamp string (e.g., "2023-07-11T16:53:00.000Z").
 * @returns A formatted, human-readable date and time string.
 */
export function formatTimestamp(isoString: string): string {
  if (isoString === undefined || isoString.length === 0) {
    return ""
  }
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    dateStyle: 'long',
    timeZone: 'Asia/Jakarta',
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
}