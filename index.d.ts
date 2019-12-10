declare type baseType = number | string

declare interface baseChars {
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
     *
     * basea(20, 16); // Convert 20 to base 16
     * //=> '14'
     *
     * basea("14", 16, 10); // Convert 20 to base 10 from base 16
     * //=> '20'
     *
     * basea(10, "abc"); // Convert 10 to use a custom base
     * //=> 'bab'
     * ```
     */
    (number: number, to: baseType): baseType
    (number: string, from: string): number
    (number: baseType, from: baseType, to: baseType): baseType

    /**
     * Numerical bases to use for conversion. Can be modified to affect the output of basea.
    */
    bases: baseChars
}

export = basea;
