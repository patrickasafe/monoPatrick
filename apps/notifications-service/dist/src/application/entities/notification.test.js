"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_1 = require("./content");
const notification_1 = require("./notification");
describe('Notification content', () => {
    it('should be able to create a notification', () => {
        const notification = new notification_1.Notification({
            content: new content_1.Content('Nova solicitação de amizade'),
            category: 'social',
            recipientId: 'example-recipient-id',
        });
        expect(notification).toBeTruthy();
    });
    it('should not be able to create a notification content with less than 5 characters', () => {
        expect(() => new content_1.Content('Você')).toThrow();
    });
    it('should not be able to create a notification content with more than 240 characters', () => {
        expect(() => new content_1.Content('a'.repeat(241))).toThrow();
    });
});
//# sourceMappingURL=notification.test.js.map