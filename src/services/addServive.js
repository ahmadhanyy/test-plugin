import { request } from "@penta-b/ma-lib";


export const callAddService = async (data, action, errorNotification) => {
    return await request.post("/api/update/add", data).then(
        (response) => {
            return action(response);
        }).catch(
            (error) => {
                if(errorNotification){
                    errorNotification(error);
                }
            });
};
