const url = 'http://localhost:3000/recipes'

export const addRecipe = (recipe) => ({ type: 'ADDED_RECIPE', payload: recipe})

export const setRecipes = (recipes) => ({type: "GOT_RECIPES", payload: recipes})

export const createRecipe = (recipe) => {
    return (dispatch) => {
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
        .then(json => {
            dispatch(addRecipe(json))
        })
    }
}

export const getRecipes = () => {
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url)
        .then(r => r.json())
        .then(json => {
            dispatch(setRecipes(json))
        })
    }
        
}