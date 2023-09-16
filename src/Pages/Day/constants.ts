import { Moment } from "./types";

export const mockMoments: Moment[] = [
    {
        imgs: [''],
        time: {
            date: "2023 09 04",
            minute: "17th Dec, 3:00"
        },
        description: "阳光洒进屋子，今天是个好天气！起床做了运动，精神饱满，早餐后，骑车来到公司，准备开始新的一天。让我们拥抱每一天，活出精彩！",
        location: "上海市黄浦区中山南一路500号"
    },
    {
        imgs: ['', ''],
        time: {
            date: "2023 09 04",
            minute: "17th Dec, 3:00"
        },
        description: "午餐时间到，和同事一起去了公司附近的小饭馆，点了个肉蛋炒饭，还有个汤，简单却美味。适当放松一下，迎接下半场的挑战。",
        location: "南六公路1188号-迪轩中餐厅"
    }
]

export let spaceName = '';

export const setSpaceName = (name: string) => {
    spaceName = name;
}

export let moments: Moment[] = [];

export const setMoments = (data: Moment[]) => {
    moments = data;
}