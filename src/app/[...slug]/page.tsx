import Modules from "@/components/Modules";
import { getPageProps, getPages } from "@/graphql/queries/getData";
import { PageType } from "@/types/baseTypes";
import { type } from "os";

export async function generateStaticParams() {
  const data = await getPages();
  const pages = data?.pages as PageType[];

  return pages.map((page) => {
    if (!page) return;

    return {
      slug: [page.slug],
    };
  });
}

const getPageDataBySlug = async (slug: string) => {
  const data = await getPages();
  const pages = data?.pages;
  if (!pages) return;
  return data?.pages.find((page: PageType) => page.slug === slug);
};

export const DynamicPage = async ({ params }) => {
  const slug = params?.slug?.[0] ?? "home";
  const pageData = await getPageDataBySlug(slug);

  return (
    <div>
      home
      {pageData?.modules && <Modules modules={pageData.modules} />}
    </div>
  );
};

export default DynamicPage;
