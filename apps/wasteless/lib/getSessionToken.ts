interface Props {
  "next-auth.session-token": string;
  "next-auth.csrf-token": string;
  "next-auth.callback-url": string;
  SID: string;
}

export const getSessionToken = (cookie: Props) => {
  const sessionToken = cookie["next-auth.session-token"];

  return sessionToken;
};
