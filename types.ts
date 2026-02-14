export type ViewState = 'home' | 'timeline' | 'gallery';

export interface Memory {
    id: string;
    date: string;
    dayNumber: number;
    title: string;
    image: string;
    poem: string;
    isLocked: boolean;
}

export interface User {
    name: string;
    partnerName: string;
    startDate: string;
    profileImage: string;
    partnerImage: string;
}