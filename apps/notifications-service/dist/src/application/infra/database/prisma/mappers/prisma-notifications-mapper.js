"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationMapper = void 0;
const notification_1 = require("../../../../entities/notification");
const content_1 = require("../../../../entities/content");
class PrismaNotificationMapper {
    static toPrisma(notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        };
    }
    static toDomain(raw) {
        return new notification_1.Notification({
            category: raw.category,
            content: new content_1.Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            createdAt: raw.createdAt,
        }, raw.id);
    }
}
exports.PrismaNotificationMapper = PrismaNotificationMapper;
//# sourceMappingURL=prisma-notifications-mapper.js.map