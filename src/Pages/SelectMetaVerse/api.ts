export const getEvents = (): Promise<string[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(['event1', 'event2', 'event3']);
        }, 1000);
    });
}