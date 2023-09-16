import axios from "axios";
import { CardProps } from "../Card/types";
import { mockCards } from "./mock";
import { v4 as uuid } from 'uuid';
import { baseUrl } from "../../../constants";

export const getFirstComments = (): Promise<CardProps[]> => axios.post(`${baseUrl}/event/recommend`, {
    "page": 1,
    "userId": '1699330023510573057'
}).then(({ data }) => {
    if (data.msg === 'success') {
        return data.data;
    } else {
        return [];
    }
});

export const getAdditionalComments = (lastIndex: number): Promise<CardProps[]> => {
    const page = Math.floor((lastIndex - 20) / 5) + 2;
    return axios.post(`${baseUrl}/event/recommend`, {
        "page": page,
        "userId": '1699330023510573057'
    }).then(({ data }) => {
        if (data.msg === 'success') {
            return data.data.map((card: Omit<CardProps, "index">, index: number) => ({
                ...card,
                index: lastIndex + index + 1,
            }));
        } else {
            return [];
        }
    });
}


