import { NextPageContext } from "next";

const redirect = (ctx: NextPageContext, path: string) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: path });
    ctx.res.end();
  } else {
    document.location.pathname = path;
  }
};

export { redirect };
export default redirect;
