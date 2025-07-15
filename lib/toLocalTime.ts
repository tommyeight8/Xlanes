export function toLocalTime(timeStr: string, dateStr: string = "1970-01-01") {
  const date = new Date(`${dateStr}T${timeStr}`);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
