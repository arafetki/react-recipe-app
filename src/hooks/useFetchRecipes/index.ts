import useSWR from "swr";
import type { RecipesApiResponse } from "@/types";

const useFetchRecipes = (offset: number = 1 ) => {

    const params = new URLSearchParams({ skip: offset.toString(), limit: "10"})

    const {data,error,isLoading} = useSWR<RecipesApiResponse>(`/recipes?${params.toString()}`)

    console.log(data)

    return {
        recipes: data?.recipes || [],
        error,
        isLoading,
    }

}

export {useFetchRecipes};