import { NotificationsRepository } from '../repositories/notifications-repository';
interface UnreadNotificationRequest {
    notificationId: string;
}
declare type UnreadNotificationResponse = void;
export declare class UnreadNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse>;
}
export {};
