import axios from "axios";
import { baseUrl } from "../../constants";

export const getEvents = (): Promise<string[]> => new Promise((resolve) => {
    setTimeout(() => {
        resolve(['event1 去一次远足', 'event2 去一次远足', 'event3 去一次远足', 'event4 去一次远足']);
    }, 300);
});
