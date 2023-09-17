import axios from "axios";
import { baseUrl } from "../../constants";
import { v4 as uuid } from 'uuid';

export const getEvents = (text: string): Promise<Array<{id: string; eventName: string;}>> => axios.post(`${baseUrl}/event/customize`, {
    text: '散步'
}).then(({ data }) => {
    console.log({data})
    if (data.msg === 'success') {
        return data.data;
    } else {
        return [
            {
                id: uuid(),
                eventName: 'event1 去一次远足'
            },
            {
                id: uuid(),
                eventName: 'event2 去一次远足'
            },
            {
                id: uuid(),
                eventName: 'event3 去一次远足'
            },
            {
                id: uuid(),
                eventName: 'event4 去一次远足'
            }
        ];
    }
});

