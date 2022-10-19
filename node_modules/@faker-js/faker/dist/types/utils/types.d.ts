/**
 * Type that represents a single method/function name of the given type.
 */
export declare type MethodOf<ObjectType, Signature extends (...args: any[]) => unknown = (...args: any[]) => unknown> = {
    [Key in keyof ObjectType]: ObjectType[Key] extends Signature ? Key : never;
}[keyof ObjectType];
/**
 * Type that represents all method/function names of the given type.
 */
export declare type MethodsOf<ObjectType, Signature extends (...args: any[]) => unknown = (...args: any[]) => unknown> = ReadonlyArray<MethodOf<ObjectType, Signature>>;
