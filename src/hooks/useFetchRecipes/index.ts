import useSWR from "swr/immutable";
import type { RecipesApiResponse } from "@/types";
import { PAGE_SIZE } from "@/utils/const";

const useFetchRecipes = (pageNum: number = 1 ) => {

    const params = {
        skip: ((pageNum-1)*PAGE_SIZE).toString(),
        limit: PAGE_SIZE.toString()
    }

    const {data,error,isLoading} = useSWR<RecipesApiResponse,Error>(['/recipes',params])

    const recipes = data?.recipes || [];

    return {
        recipes,
        total: data?.total || 0,
        error,
        isLoading,
    }

}

export {useFetchRecipes};