import useSWR from "swr/immutable";
import type { RecipesApiResponse } from "@/types";

const useFetchRecipes = (pageNum: number = 1 ) => {

    const params = {
        skip: ((pageNum-1)*10).toString(),
        limit: '10'
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