
// Function to generate random date between start and end dates
function getRandomDate(start: Date, end: Date): string {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString();
}

// Generate sample data
export const dataSample = Array.from({ length: 200 }, (_, index) => {
    const startDate = new Date('2024-01-01');
    const endDate = new Date('2025-12-31');

    return {
        title: `Article ${index + 1}`,
        someList: Array.from({ length: 5 }, (_, listIndex) => {
            return {
                someSelect: `option${(listIndex % 3) + 1}`,
                someDate: getRandomDate(startDate, endDate),
            };
        }),
        someOtherDate: getRandomDate(startDate, endDate),
    };
});