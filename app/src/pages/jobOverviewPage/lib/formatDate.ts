export function getFormattedDate(dateString: string) {
  try {
    const date = new Date(dateString);
    const year = new Intl.DateTimeFormat("no", { year: "numeric" }).format(
      date
    );
    const month = new Intl.DateTimeFormat("no", { month: "short" }).format(
      date
    );
    const day = new Intl.DateTimeFormat("no", { day: "2-digit" }).format(date); // Use en, no is bugged
    return `${day} ${month} ${year}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return "";
  }
}
