const devBaseURL = "http://localhost:3000/api/";

const prodBaseURL = "http://mono-patrick-wasteless.vercel.app/api/";

export const baseUrl: string =
  process.env.NODE_ENV === "development" ? devBaseURL : prodBaseURL;
