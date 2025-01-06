declare function catchErrorTyped<T, E extends new (message?: string) => Error>(promise: Promise<T>, errorsToCatch?: E[]): Promise<[undefined, T] | [InstanceType<E>]>;
declare class CustomError extends Error {
    name: string;
    extraProp: string;
}
export { catchErrorTyped, CustomError };
