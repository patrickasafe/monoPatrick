const devBaseURL = "https://mono-patrick-wasteless.vercel.app/api/";

export const baseURL: string =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://mono-patrick-wasteless.vercel.app/api/";
// process.env.NEXT_API_URL || "http://localhost:3000/api/";
// export const baseUrl: string = "http://localhost:3000/api/"
// process.env.NODE_ENV === "test" ? testBaseURL : devBaseURL;
