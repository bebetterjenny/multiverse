import { CardProps } from "../Card/types";
import { mockCards } from "./mock";
import { v4 as uuid } from 'uuid';

export const getCommentsFirst = (): Promise<CardProps[]> => new Promise((resolve) => {
    resolve(mockCards.map((card, index) => ({
        ...card,
        index,
        eventId: uuid()
    })) as CardProps[]);
});

export const getAdditionalComments = (lastIndex: number): Promise<CardProps[]>  => new Promise((resolve) => {
    const mock = {
        eventName: "这一天醒来以后没有玩手机，而是起床后直接做了一套早操。",
        nickname: "小明",
        description: "",
        age: 20,
        gender: "男",
        education: "字节程序员"
    };
    resolve(Array(5).fill(0).map((e, index) => ({
        ...mock,
        index: lastIndex + index + 1,
        eventId: uuid()
    })) as CardProps[]);
});