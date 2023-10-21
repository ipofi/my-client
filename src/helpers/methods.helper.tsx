export class HelperMethods {
    static filterObject = (data: Record<string, any>) => {
        return Object.fromEntries(
            Object.entries(data).filter(([key, value]) => !value)
        );
    };
    // ...other helper methods
}