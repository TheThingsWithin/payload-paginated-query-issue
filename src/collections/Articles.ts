import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
    slug: 'articles',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            type: "array",
            name: "someList",
            fields: [
                {
                    type: "select",
                    name: "someSelect",
                    options: ["option1", "option2", "option3"],
                    required: true,
                },
                {
                    type: "date",
                    name: "someDate",
                    required: true,
                },
            ]
        },
        {
            type: "date",
            name: "someOtherDate",
            required: true,
        },
    ],
}
