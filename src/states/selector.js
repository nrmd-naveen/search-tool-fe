
import { selector } from 'recoil';
import { results, ResultTypeAtom } from './atom';

console.log(results)

export const displayData = selector({
    key: 'displayData',
    get: ({ get }) => {
        const type = get(ResultTypeAtom);
        const data = get(results)
        // console.log(type)
        // console.log(data)
        if (!data) return null;
        if (type === "google") return data?.filter(item => item.type === "google");
        else if (type === "youtube") return data.filter(item => item.type === "youtube");
        else if (type === "linkedin") return data.filter(item => item.type === "linkedin");
        else return Object.values(data).flat();
    }
})

export const googleSelector = selector({
  key: 'googleSelector',
  get: ({ get }) => {
      const result = get(results);
    // console.log('Google Results:', result); 
    return result.google;
  }
});


export const youtubeSelector = selector({
    key: 'youtubeSelector',
    get: ({ get }) => {
        const result = get(results)
        return result.youtube
    }
})

export const linkedinSelector = selector({
    key: 'linkedinSelector',
    get: ({ get }) => {
        const result = get(results)
        return result.linkedin
    }
})