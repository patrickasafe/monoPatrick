"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationMapper = void 0;
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
}
exports.PrismaNotificationMapper = PrismaNotificationMapper;
//# sourceMappingURL=prisma-notifications-mapper.js.map