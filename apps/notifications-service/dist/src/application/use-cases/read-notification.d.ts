import { NotificationsRepository } from '../repositories/notifications-repository';
interface ReadNotificationRequest {
  notificationId: string;
}
declare type ReadNotificationResponse = void;
export declare class ReadNotification {
  private notificationsRepository;
  constructor(notificationsRepository: NotificationsRepository);
  execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse>;
}
export {};
