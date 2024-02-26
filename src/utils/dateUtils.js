export const todayPlusDays = (days = 0) => {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      weekday: "long",
    }
  );
};
