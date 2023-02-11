const testBaseURL = "http://localhost:3000/api/";

const devBaseURL = "https://mono-patrick-wasteless.vercel.app/api/";

export const baseUrl: string =
  process.env.NODE_ENV === "test" ? testBaseURL : devBaseURL;
