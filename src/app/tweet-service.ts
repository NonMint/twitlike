export interface TweetModel {
    username: string
    content: string
    date: Date
}
export class TweetService {
    private data: TweetModel[];

    constructor() {
        this.data = generateSampleData();
    }

    public set(key: string, value: any): void {
        this.data[key] = value;
    }

    public get(key: string): any {
        return this.data[key];
    }

    public getAll(): Record<string, any> {
        return this.data;
    }

    public remove(key: string): void {
        delete this.data[key];
    }

    public clear(): void {
        this.data = [];
    }
}

interface TweetModel {
    username: string;
    content: string;
    date: Date;
}

const celebrityNames: string[] = [
    'Tom Hanks',
    'Jennifer Lawrence',
    'Leonardo DiCaprio',
    'Will Smith',
    'Emma Stone',
    'Ryan Reynolds',
    'Angelina Jolie',
    'Chris Hemsworth',
    'Scarlett Johansson',
    'Robert Downey Jr.',
    'Dwayne Johnson',
    'Natalie Portman',
    'Brad Pitt',
    'Anne Hathaway',
    // Add more celebrity names as needed
];

const funnyPuns: string[] = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I used to play piano by ear, but now I use my hands.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    // Add more funny puns as needed
];

const generateRandomDate = (): Date => {
    const startDate = new Date(2023, 0, 1).getTime(); // January 1, 2023
    const endDate = new Date().getTime(); // Current date
    const randomTimestamp = Math.floor(Math.random() * (endDate - startDate + 1)) + startDate;
    return new Date(randomTimestamp);
};

const generateSampleData = (): TweetModel[] => {
    const sampleData: TweetModel[] = [];

    for (let i = 0; i < 20; i++) {
        const username = celebrityNames[Math.floor(Math.random() * celebrityNames.length)];
        const content = funnyPuns[Math.floor(Math.random() * funnyPuns.length)];
        const date = generateRandomDate();

        const tweet: TweetModel = {
            username,
            content,
            date,
        };

        sampleData.push(tweet);
    }

    return sampleData;
};

export const ts = new TweetService();