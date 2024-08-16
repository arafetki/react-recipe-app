import React from "react"
import ThemeSwitcher from "@/components/common/ThemeSwitcher"
import RecipesList from "@/components/containers/RecipesList"


export default function App() {

  return (
    <React.Fragment>
      <header className="flex h-16 items-center justify-center">
        <ThemeSwitcher/>
      </header>
      <main className="mt-6">
        <RecipesList/>
      </main>
    </React.Fragment>
  )
}

