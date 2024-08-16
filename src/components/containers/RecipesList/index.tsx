import { useState } from "react"
import { useFetchRecipes } from "@/hooks/useFetchRecipes"
import {Pagination, Button} from "@nextui-org/react";

import RecipeCard from "@/components/containers/RecipeCard"

export default function RecipesList(): JSX.Element {

    const [currentPage, setCurrentPage] = useState(1);
    const {recipes,total,isLoading, error} = useFetchRecipes(currentPage)
    useFetchRecipes(currentPage+1) // Smooth ux while moving through pages

    const totalPages = total/10;
    const isEnd = currentPage === totalPages;

    if (isLoading) return <span>Loading...</span>
    if (error) return <span>error : {error.message}</span>

    return (
        <div className="px-6">
            <ul className="flex gap-3 overflow-x-scroll">
                {recipes.map(r=>{
                    return (
                        <li key={r.id}>
                            <RecipeCard 
                                id={r.id}
                                name={r.name}
                                thumbnail={r.image}
                                difficulty={r.difficulty}
                                ratings={r.rating}
                                prepTimeMinutes={r.cookTimeMinutes+r.prepTimeMinutes}
                                servings={r.servings}
                            />
                        </li>
                    )
                })}
            </ul>
            <div className="flex flex-col items-center gap-5 mt-8">
                <Pagination
                    total={totalPages}
                    color="secondary"
                    page={currentPage}
                    onChange={setCurrentPage}
                />
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                    >
                    Previous
                    </Button>
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setCurrentPage((prev) => (!isEnd ? prev + 1 : prev))}
                        disabled={isEnd}
                    >
                    Next
                    </Button>
                </div>
            </div>
        </div>

    )
}