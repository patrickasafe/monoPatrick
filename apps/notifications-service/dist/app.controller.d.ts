import { PrismaService } from './prisma.service';
import { CreateNotificationBody } from './create-notifications-body';
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): import("@prisma/client").PrismaPromise<import("@prisma/client").Notification[]>;
    create(body: CreateNotificationBody): Promise<{
        data: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
        };
    }>;
}
