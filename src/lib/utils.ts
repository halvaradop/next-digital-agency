import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges multiple class names into a single string.
 *
 * This function takes any number of class name arguments and merges them into a single
 * string using the `twMerge` and `clsx` utilities. It is useful for conditionally
 * combining class names in a concise and readable manner.
 *
 * @param {...ClassValue[]} classes - The class names to merge. Each argument can be a string,
 * an object with boolean values, or an array of strings and objects.
 * @returns {string} The merged class names as a single string.
 */
export const merge = (...classes: ClassValue[]) => {
    return twMerge(clsx(classes))
}
