import { store, query, systemShowLoading, systemHideLoading } from "@penta-b/ma-lib";

const genQueryBody = (layer) => {
    return [
        {
            dataSource: {
                id: layer.id,
            },
            crs: layer.crs,
        },
    ];
};

export const callQueryService = async (layer) => {
    store.dispatch(systemShowLoading());
    return await query.queryFeatures(genQueryBody(layer)).then((res) => {
        return JSON.parse(res.data[0].features).features;
    }).catch((err) => {
        console.log(err);
        return false;
    }).finally(() => {
        store.dispatch(systemHideLoading());
    });
};