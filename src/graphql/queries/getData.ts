import { gql } from "@apollo/client";
import client from "../apollo-client";

const GET_PAGES = gql`
  query Pages {
    pages {
      slug
      modules {
        ... on Slider {
          headline
          backgroundColor
          images {
            width
            height
            id
            url
            mimeType
          }
        }
        ... on TextMediaModule {
          headline
          text
          textIsLeft
          backgroundColor
          image {
            width
            height
            id
            url
            mimeType
          }
        }
        ... on TextModule {
          headline
          text
          backgroundColor
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

const getData = async (QUERY, id?: string) => {
  let variables;
  if (id) {
    variables = {
      id,
    };
  }

  try {
    const { data } = await client.query({
      query: QUERY,
      variables,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPages = async () => {
  return await getData(GET_PAGES);
};

// get page modules by page id
export const getPageProps = async (id: string) => {
  return await getData(GET_PAGE_MODULES, id);
};
