import { BaseRecord, DataProvider, GetListResponse, GetOneResponse } from "@pankod/refine-core";
import axios, { AxiosInstance } from "axios";
import { IEpisode, ISeries } from "interfaces";

const axiosInstance = axios.create();

// const apiUrl = 'https://dev-internal.api.golottie.com/internal'
const headers = {
    // TODO add Auth header for desired environemnt here 'Authorization': 'Basic <...>'
}

export const dataProvider = (
    apiUrl: string,
    httpClient: AxiosInstance = axiosInstance,
): DataProvider => ({
    // create: ({ resource, variables, metaData }) => Promise,
    // createMany: ({ resource, variables, metaData }) => Promise,
    deleteOne: async ({ resource, id, variables, metaData }) => {
        const url = `${apiUrl}/${resource}/${id}`;
        const { data } = await httpClient.delete(url, {
            headers
          });
        return {data};
    },
    // deleteMany: ({ resource, ids, variables, metaData }) => Promise,
    getList: async ({ resource, pagination, sort, filters, metaData }): Promise<GetListResponse<ISeries | IEpisode>> =>  {
        const url = `${apiUrl}/${resource}`;
        const { data } = await httpClient.get(url, {
            headers
          });
        return {
            data: data.result,
            total: data.result.length
        }
    },
    // getMany: ({ resource, ids, metaData }) => Promise,
    getOne: async ({ resource, id, metaData }): Promise<GetOneResponse<ISeries>> => {
        const url = `${apiUrl}/${resource}/${id}`;
        const { data } = await httpClient.get(url, {
            headers
          });
        return {
            data: data,
        }
    },
    update: async ({ resource, id, variables, metaData }): Promise<GetOneResponse<ISeries>> => {
        const url = `${apiUrl}/${resource}/${id}`;
        const { data } = await httpClient.patch(url,
            resource === 'series' ? {...variables} : {... (variables as any).result},
            {headers});
        return {
            data
        };
    },
    // updateMany: ({ resource, ids, variables, metaData }) => Promise,
    // custom: ({
    //     url,
    //     method,
    //     sort,
    //     filters,
    //     payload,
    //     query,
    //     headers,
    //     metaData,
    // }) => Promise,
    // getApiUrl: () => "",
} as DataProvider);