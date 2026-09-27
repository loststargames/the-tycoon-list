const UTM_SOURCE = "the-tycoon-list";

/** Tags an outbound URL so clicks from this site can be attributed. */
export const withUtm = (
  url: string,
  campaign: string,
  content?: string,
): string => {
  const parsed = new URL(url);
  parsed.searchParams.set("utm_source", UTM_SOURCE);
  parsed.searchParams.set("utm_medium", "referral");
  parsed.searchParams.set("utm_campaign", campaign);
  if (content) parsed.searchParams.set("utm_content", content);
  return parsed.toString();
};
