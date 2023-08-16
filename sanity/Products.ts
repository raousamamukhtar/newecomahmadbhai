import { defineField, defineType } from "sanity";

export default defineType({
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    defineField({
      name: "productName",
      type: "string",
      title: "ProductName",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "description",
      type: "array",
      title: "Description",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "image",
      type: "array",
      title: "Image",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "text",
              title: "Alternative text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "productTypes",
      type: "array",
      title: "ProductType",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
    }),
    defineField({
      name: "size",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "quantity",
      type: "number",
      title: "Quantity",
    }),
  ],
});
