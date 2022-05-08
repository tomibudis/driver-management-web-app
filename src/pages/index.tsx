import { NextPageContext } from "next";
import { redirect } from "~utils/redirect";

const RootPage = () => null;

RootPage.getInitialProps = async (ctx: NextPageContext) => {
  redirect(ctx, "/homepage");
  return {};
};

export default RootPage;
