import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
interface GetRecipientNotificationRequest {
  recipientId: string;
}
interface GetRecipientNotificationResponse {
  notifications: Notification[];
}
export declare class GetRecipientNotifications {
  private notificationsRepository;
  constructor(notificationsRepository: NotificationsRepository);
  execute(
    request: GetRecipientNotificationRequest,
  ): Promise<GetRecipientNotificationResponse>;
}
export {};
