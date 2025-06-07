import { capitalize } from "../../../../utils/functions";

export default {
    async beforeCreate(event) {
        const { data } = event.params;
        data.name = capitalize(data.name);
        /**
         * TODO: In beforeCreate, check if the project is being linked to one or more libraries.
         * If so, automatically set `isActive` to true. Otherwise, leave it as false (default).
         */
    },

    async beforeUpdate(event) {
        /**
         * TODO: In beforeUpdate, determine if the list of associated libraries is being modified
         * (e.g. libraries added or removed). Based on the final count after the update,
         * set `isActive` to true if at least one library remains linked, or false if none.
         */
    }




}