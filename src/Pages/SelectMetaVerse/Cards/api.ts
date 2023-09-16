import axios from "axios";
import { CardProps } from "../Card/types";
import { mockCards } from "./mock";
import { v4 as uuid } from 'uuid';
import { baseUrl } from "../../../constants";

export const getComments = (page: number): Promise<Omit<CardProps, "index">[]> => axios.post(`${baseUrl}/event/recommend`, {
    page,
    userId: '1699330023510573057'
}).then(({ data }) => {
    if (data.msg === 'success') {
        return (page === 1 ? data.data : data.data.slice(0, 5)).map((card: Omit<CardProps, "index">) => ({
            ...card,
            eventId: uuid(),
        }));
    } else {
        return page === 1 ? mockCards.map((card: Omit<CardProps, "eventId" | "index">, index: number) => ({
            ...card,
            eventId: uuid(),
        })) : Array(5).fill(0).map((_, index) => ({
            ...mockCards[index],
            eventId: uuid(),
        }));
    }
});


