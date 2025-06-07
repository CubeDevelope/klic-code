
import { capitalize, slugify } from "../../../../utils/functions";

export default {
    // Hook that runs before a new entry is created
    async beforeCreate(event) {
        const { data } = event.params;

        // If the slug is not manually provided, generate one from the name
        if (!data.slug) {
            /**
             * TODO: Before saving the slug, we should check if the generated slug
             * is already in use by another record, and handle duplicates (e.g. add a suffix)
             */
            data.slug = slugify(data.name);
        }

        // Capitalize the name before saving
        data.name = capitalize(data.name);

        // If the library is associated with at least one project, mark it as active,
        // assuming the 'isActive' flag is not set manually during creation

        if (
            data.projects &&
            data.projects.connect &&
            data.projects.connect.length > 0
        ) {
            data.isActive = true;
        }
    },

    // Hook that runs before updating an existing entry
    async beforeUpdate(event) {
        const {data, where} = event.params
        
        const currentData = await strapi.entityService.findMany('api::library.library', {
            filters: {
                id: where.id
            },
            populate: ['projects'],
            limit: 1
        })

        const connectedProjects = data.projects?.connect?.length || 0
        const disconnectedProjects = data.projects?.disconnect?.length || 0

        data.isActive = (currentData[0]['projects']?.length || 0) + connectedProjects - disconnectedProjects > 0
    }
};



