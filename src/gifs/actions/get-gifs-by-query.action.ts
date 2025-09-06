import { GhiphyResponse } from "../interfaces/giphy.response";
import { Gif } from "../interfaces/gif-interface";
import { ghipyApi } from "../api/ghipy.api";

export const getGiphyByQuery = async(query: string ): Promise<Gif[]> => {
    const response =  await ghipyApi<GhiphyResponse>(
        '/search', {
        params: {
            q: query,
            limit: 10,
            // lang: 'es',
            // api_key: import.meta.env.VITE_GIPHY_API_KEY
    }
    });

    return response.data.data.map( (gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }))
}