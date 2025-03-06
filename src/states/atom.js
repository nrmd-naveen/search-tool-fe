import { atom } from "recoil";
import { testRes } from "../config/test";



export const results = atom({
    key: 'results',
    default: null
})

export const ResultTypeAtom = atom({
    key: 'resultType',
    default: "all"
})

export const LoaderAtom = atom({
    key: 'loader',
    default: false
})

// console.log(results)
