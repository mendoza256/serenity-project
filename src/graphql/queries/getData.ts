import { gql } from "@apollo/client";
import { getClient } from "../apollo-client";

const GET_PAGES = gql`
  query Pages {
    pages {
      slug
      modules(first: 100) {
        ... on TextModule {
          headline
          text
          backgroundColor
        }
        ... on TextMediaModule {
          headline
          text
          textIsLeft
          backgroundColor
          image {
            width
            height
            url
          }
        }
        ... on Slider {
          headline
          backgroundColor
          images {
            width
            height
            url
          }
        }
      }
      header {
        pageTitle
        subline
        headerMedia {
          url
          height
          width
        }
        videoPoster {
          url
          height
          width
        }
      }
    }
  }
`;

const GET_PAGE_MODULES = gql`
  query PageModules($id: ID!) {
    page(id: $id) {
      id
      modules {
        ... on Slider {
          id
        }
        ... on TextMediaModule {
          id
          headline
          text
          textIsLeft
        }
        ... on TextModule {
          id
          headline
          text
        }
      }
    }
  }
`;

// TODO add Query type
const getData = async (QUERY: any, id?: string) => {
  let variables;
  if (id) {
    variables = {
      id,
    };
  }

  try {
    const { data } = await getClient().query({
      query: QUERY,
      variables,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPages = async () => {
  return await getData(GET_PAGES);
};

export const getPageProps = async (id: string) => {
  return await getData(GET_PAGE_MODULES, id);
};
