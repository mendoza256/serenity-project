import DynamicPage from "./[...slug]/page";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function Page({ params }: PageProps) {
  return <DynamicPage params={params} />;
}
