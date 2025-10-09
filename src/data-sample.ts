
// Function to generate random date between start and end dates
function getRandomDate(start: Date, end: Date): string {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString();
}

// Generate sample data
export const dataSample = Array.from({ length: 200 }, (_, index) => {
    const startDate = new Date('2025-01-01');
    const endDate = new Date('2026-12-31');

    return {
        title: `Article ${index + 1}`,
        someList: Array.from({ length: 10 }, (_, listIndex) => {
            return {
                someSelect: `option${(listIndex % 3) + 1}`,
                someDate: getRandomDate(startDate, endDate),
                someNumber: Math.floor(Math.random() * 1000),
            };
        }),
        otherList: Array.from({ length: 10 }, (_, listIndex) => {
            return {
                someText: Math.random().toString(36).substring(2, 10),
                someCheckbox: Math.random() >= 0.5,
            };
        }),
        someOtherDate: getRandomDate(startDate, endDate),
    };
});