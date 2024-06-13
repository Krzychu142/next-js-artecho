export const isEmailValidation = (email: string): boolean => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return !(!email || !emailRegex.test(email));
}