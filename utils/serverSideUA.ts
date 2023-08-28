import { GetServerSidePropsContext } from "next";

export interface ServerSideUAProps {
  UA: string;
}

export const serverSideUA = async (
  context: GetServerSidePropsContext
): Promise<ServerSideUAProps> => {
  const { req } = context;
  let UA: string;

  if (req && req.headers["user-agent"]) {
    UA = req.headers["user-agent"];
  } else {
    UA = navigator.userAgent;
  }

  return { UA };
};
