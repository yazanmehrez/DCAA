export enum ETCompType {
    routeToPage = 0,
    display
}


export class NewsletterSubscribe {
    newsletterSubscribeId: number;

    email: string;
    entryDate: Date | string;
}
