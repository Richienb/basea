declare type baseType = number | string

declare interface baseObject {
    [base: number]: string
}

declare const basea: {
    /**
     * Convert between numerical bases.
     * @param number The number to convert.
     * @param from The base to convert from.
     * @param to The base to convert to.
     * @example
     * ```
     * const basea = require("basea");
     * ```
     */
    <T extends baseType>(number: number, to: T): T
    (number: string, from: string): number
    <T extends baseType>(number: string, from: string, to: T): T
    <T extends baseType, U extends baseType>(number: T, from: T, to: U): U

    /**
     * Configure a numerical base.
     * @param base The base to configure.
     * @param baseObj The base object to configure.
     * @param characters The characters to use.
    */
    base(baseObj: baseObject): void
    base(base: number, characters: string): void
}

export = basea;
