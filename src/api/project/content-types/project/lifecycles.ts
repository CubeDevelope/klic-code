import { capitalize } from "../../../../utils/functions";

export default {
    /**
     * TODO: Inserting a library into a project doesn't trigger the libraries' beforeUpdate/beforeCreate, 
     * so when the relation is added, changed, or removed, 
     * the corresponding library record must be checked and updated accordingly.
     */

    async beforeCreate(event) {
        const { data } = event.params;
        data.name = capitalize(data.name);
    },

    async beforeUpdate(event) {
    }




}