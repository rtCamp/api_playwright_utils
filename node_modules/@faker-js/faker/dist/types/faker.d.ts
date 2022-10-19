import { Address } from './address';
import { Animal } from './animal';
import { Commerce } from './commerce';
import { Company } from './company';
import { Database } from './database';
import { Datatype } from './datatype';
import { _Date } from './date';
import type { LocaleDefinition } from './definitions';
import { Fake } from './fake';
import { Finance } from './finance';
import { Git } from './git';
import { Hacker } from './hacker';
import { Helpers } from './helpers';
import { Image } from './image';
import { Internet } from './internet';
import type { KnownLocale } from './locales';
import { Lorem } from './lorem';
import { Mersenne } from './mersenne';
import { Music } from './music';
import { Name } from './name';
import { Phone } from './phone';
import { Random } from './random';
import { System } from './system';
import { Time } from './time';
import { Unique } from './unique';
import { Vehicle } from './vehicle';
import { Word } from './word';
export declare type LiteralUnion<T extends U, U = string> = T | (U & {
    zz_IGNORE_ME?: never;
});
export declare type UsableLocale = LiteralUnion<KnownLocale>;
export declare type UsedLocales = Partial<Record<UsableLocale, LocaleDefinition>>;
export interface FakerOptions {
    locales: UsedLocales;
    locale?: UsableLocale;
    localeFallback?: UsableLocale;
}
export declare class Faker {
    locales: UsedLocales;
    locale: UsableLocale;
    localeFallback: UsableLocale;
    readonly definitions: LocaleDefinition;
    private _seedValue;
    readonly fake: Fake['fake'];
    readonly unique: Unique['unique'];
    readonly mersenne: Mersenne;
    readonly random: Random;
    readonly helpers: Helpers;
    readonly datatype: Datatype;
    readonly address: Address;
    readonly animal: Animal;
    readonly commerce: Commerce;
    readonly company: Company;
    readonly database: Database;
    readonly date: _Date;
    readonly finance: Finance;
    readonly git: Git;
    readonly hacker: Hacker;
    readonly image: Image;
    readonly internet: Internet;
    readonly lorem: Lorem;
    readonly music: Music;
    readonly name: Name;
    readonly phone: Phone;
    readonly system: System;
    readonly time: Time;
    readonly vehicle: Vehicle;
    readonly word: Word;
    constructor(opts: FakerOptions);
    /**
     * The seed that was last set.
     * Please note that generated values are dependent on both the seed and the number of calls that have been made since it was set.
     *
     * Use the `seed` function to set a new seed.
     *
     * @deprecated Use the return value of `faker.seed()` instead.
     */
    get seedValue(): number | number[];
    /**
     * Creates a Proxy based LocaleDefinition that virtually merges the locales.
     */
    private initDefinitions;
    /**
     * Sets the seed or generates a new one.
     *
     * Please note that generated values are dependent on both the seed and the
     * number of calls that have been made since it was set.
     *
     * This method is intended to allow for consistent values in a tests, so you
     * might want to use hardcoded values as the seed.
     *
     * In addition to that it can be used for creating truly random tests
     * (by passing no arguments), that still can be reproduced if needed,
     * by logging the result and explicitly setting it if needed.
     *
     * @param seed The seed to use. Defaults to a random number.
     * @returns The seed that was set.
     *
     * @example
     * // Consistent values for tests:
     * faker.seed(42)
     * faker.datatype.number(10); // 4
     * faker.datatype.number(10); // 8
     *
     * faker.seed(42)
     * faker.datatype.number(10); // 4
     * faker.datatype.number(10); // 8
     *
     * @example
     * // Random but reproducible tests:
     * // Simply log the seed, and if you need to reproduce it, insert the seed here
     * console.log('Running test with seed:', faker.seed());
     */
    seed(seed?: number): number;
    /**
     * Sets the seed array.
     *
     * Please note that generated values are dependent on both the seed and the
     * number of calls that have been made since it was set.
     *
     * This method is intended to allow for consistent values in a tests, so you
     * might want to use hardcoded values as the seed.
     *
     * In addition to that it can be used for creating truly random tests
     * (by passing no arguments), that still can be reproduced if needed,
     * by logging the result and explicitly setting it if needed.
     *
     * @param seedArray The seed array to use.
     * @returns The seed array that was set.
     *
     * @example
     * // Consistent values for tests:
     * faker.seed([42, 13, 17])
     * faker.datatype.number(10); // 4
     * faker.datatype.number(10); // 8
     *
     * faker.seed([42, 13, 17])
     * faker.datatype.number(10); // 4
     * faker.datatype.number(10); // 8
     *
     * @example
     * // Random but reproducible tests:
     * // Simply log the seed, and if you need to reproduce it, insert the seed here
     * console.log('Running test with seed:', faker.seed());
     */
    seed(seedArray: number[]): number[];
    /**
     * Set Faker's locale
     *
     * @param locale The locale to set (e.g. `en` or `en_AU`, `en_AU_ocker`).
     */
    setLocale(locale: UsableLocale): void;
}
