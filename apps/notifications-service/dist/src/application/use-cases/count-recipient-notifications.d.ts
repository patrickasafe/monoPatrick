import { NotificationsRepository } from '../repositories/notifications-repository';
interface CountRecipientNotificationRequest {
    recipientId: string;
}
interface CountRecipientNotificationResponse {
    count: number;
}
export declare class CountRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse>;
}
export {};
