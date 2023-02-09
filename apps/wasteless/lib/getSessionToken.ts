type Props = Partial<{
  [key: string]: string;
}>;

export const getSessionToken = (cookie: Props) => {
  const sessionToken = cookie["next-auth.session-token"];
  if (sessionToken) return sessionToken;
};
