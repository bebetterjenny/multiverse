import axios from "axios";
import { CardProps } from "../Card/types";
import { mockCards } from "./mock";
import { v4 as uuid } from 'uuid';
import { baseUrl } from "../../../constants";

// http://localhost:8080/event/recommend
export const getFirstComments = (): Promise<CardProps[]> => axios.post(`${baseUrl}/user/build-space-times`, {
    events: ["去一次远足"],
    userId: "1699330023510573057"
}).then(({ data }) => {
    console.log(1, data)
    return mockCards.map((card: Omit<CardProps, "eventId" | "index">, index: number) => ({
        ...card,
        index,
        eventId: uuid(),
    }));

});

// export const getFirstComments = (): Promise<CardProps[]> => axios.post(`${baseUrl}/event/recommend`, {
//     "page": 1,
//     "userId": '1699330023510573057'
// }).then(({ data }) => {
//     if (data.msg === 'success') {
//         return data.data;
//     } else {
//         return mockCards.map((card: Omit<CardProps, "eventId" | "index">, index: number) => ({
//             ...card,
//             index,
//             eventId: uuid(),
//         }));
//     }
// });

export const getAdditionalComments = (lastIndex: number): Promise<CardProps[]> => {
    const page = Math.floor((lastIndex - 20) / 5) + 2;
    return axios.post(`${baseUrl}/user/build-space-times`, {
        events: ["去一次远足"],
        userId: "1699330023510573057"
    }).then(({ data }) => {
        console.log(2, data)
        return Array(5).fill(0).map((_, index) => ({
            ...mockCards[index],
            index: lastIndex + index + 1,
            eventId: uuid(),
        }));

    });
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
            return Array(5).fill(0).map((_, index) => ({
                ...mockCards[index],
                index: lastIndex + index + 1,
                eventId: uuid(),
            }));
        }
    });
}


