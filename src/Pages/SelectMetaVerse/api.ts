import axios from "axios";
import { baseUrl } from "../../constants";

export const getEvents = (): Promise<string[]> => new Promise((resolve) => {
    resolve(['event1', 'event2', 'event3']);
});

// axios.post(`${baseUrl}/event/recommend`, {
//     "page": 1,
//     "userId": '1699330023510573057'
// }).then(({ data }) => {
//     console.log({data})
//     if (data.msg === 'success') {
//         return data.data;
//     } else {
//         return [];
//     }
// });
