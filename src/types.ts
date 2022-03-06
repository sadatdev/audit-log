/* Reusable Types here */

export interface ISite {
    id: string;
    name: string;
    description: string;
    location: {
        name: string;
        latitude: number;
        longitude: number;
    };
}

export interface IAuditLog {
    id: string;
    siteId: string;
    dateTime: string;
    user: string;
    action: string;
}
