import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Modules from "@/components/Modules";
import Navbar from "@/components/Navbar";
import { getPages } from "@/graphql/queries/getData";
import { PageType } from "@/types/baseTypes";

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

interface DynamicPageProps {
  params: {
    slug: string[];
  };
}

export const DynamicPage = async ({ params }: DynamicPageProps) => {
  const slug = params?.slug?.[0] ?? "home";
  const pageData = await getPageDataBySlug(slug);

  return (
    <>
      <Navbar />
      <main>
        {pageData?.header && <Header data={pageData?.header} />}
        {pageData?.modules && <Modules modules={pageData.modules} />}
      </main>
      <Footer />
    </>
  );
};

export default DynamicPage;
