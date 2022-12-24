import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    findById(notificationId: string): Promise<Notification>;
    create(notification: Notification): Promise<void>;
    save(notification: Notification): Promise<void>;
}
