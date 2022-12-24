"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_1 = require("./content");
describe('Notification content', () => {
    it('should be able to create a notification content', () => {
        const content = new content_1.Content('Você recebeu uma solicitação de amizade');
        expect(content).toBeTruthy();
    });
    it('should not be able to create a notification content with less than 5 characters', () => {
        expect(() => new content_1.Content('Você')).toThrow();
    });
    it('should not be able to create a notification content with more than 240 characters', () => {
        expect(() => new content_1.Content('a'.repeat(241))).toThrow();
    });
});
//# sourceMappingURL=content.test.js.map