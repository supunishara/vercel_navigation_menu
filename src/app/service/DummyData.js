import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    //get All Products
    //for GET .query() used

    //GET method
    getAllProducts: builder.query({
      query: () => `/products`,
    }),

    //GET method with parameters
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    //post method
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products/add`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),
  }),
});

// `use${GetAllProducts}Query`;

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
} = productsApi;
