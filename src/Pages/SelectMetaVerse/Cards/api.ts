import axios from "axios";
import { CardProps } from "../Card/types";
import { mockCards } from "./mock";
import { v4 as uuid } from 'uuid';
import { baseUrl } from "../../../constants";

// http://localhost:8080/event/recommend
// export const getFirstComments = (): Promise<CardProps[]> => axios.post(`${baseUrl}/user/build-space-times`, {
//     events: ["去一次远足"],
//     userId: "1699330023510573057"
// }).then(({ data }) => {
//     console.log(1, data)
//     return mockCards.map((card: Omit<CardProps, "eventId" | "index">, index: number) => ({
//         ...card,
//         index,
//         eventId: uuid(),
//     }));

// });

export const getComments = (page: number): Promise<Omit<CardProps, "index">[]> => axios.post(`${baseUrl}/event/recommend`, {
    page,
    userId: '1699330023510573057'
}).then(({ data }) => {
    if (data.msg === 'success') {
        return page ? data.data.slice(0, 5) : data.data;
    } else {
        return page ? Array(5).fill(0).map((_, index) => ({
            ...mockCards[index],
            eventId: uuid(),
        })) : mockCards.map((card: Omit<CardProps, "eventId" | "index">, index: number) => ({
            ...card,
            eventId: uuid(),
        }));
    }
});


