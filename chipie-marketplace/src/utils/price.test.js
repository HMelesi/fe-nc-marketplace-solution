import { formatPrice } from "./price";

describe('#formatPrice', () => {
    it('should return a string when passed a number', () => {
        const response = formatPrice(100);
        expect(typeof response).toBe('string');
    });
    it('should return the result in the correct format when the number length is between 1 and 5', () => {
        expect(formatPrice(1)).toBe('£0.01');
        expect(formatPrice(12)).toBe('£0.12');
        expect(formatPrice(123)).toBe('£1.23');
        expect(formatPrice(1234)).toBe('£12.34');
        expect(formatPrice(12345)).toBe('£123.45');
    });
    it('should return the result in the correct format when the number length is greater than 5', () => {
        expect(formatPrice(123456)).toBe('£1,234.56');
        expect(formatPrice(123456789)).toBe('£1,234,567.89');
    })
})