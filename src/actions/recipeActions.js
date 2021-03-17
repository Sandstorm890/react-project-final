const url = 'http://localhost:3000/recipes'

export const createRecipe = (recipe) => {
    
    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body: JSON.stringify(recipe)
    }
    fetch(url, configObj)
    .then(r => r.json())
    .then(json =>
        console.log(json)
        )
}