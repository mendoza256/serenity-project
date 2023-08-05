import DynamicPage from "./[...slug]/page";

export const Page = ({ params }) => {
  return <DynamicPage params={params} />;
};

export default Page;
