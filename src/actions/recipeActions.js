const url = 'http://localhost:3000/recipes'

export const addRecipe = (recipe) => ({ type: 'ADDED_RECIPE', payload: recipe})
export const setRecipes = (recipes) => ({type: "GOT_RECIPES", payload: recipes})
// export const deletedRecipe = (recipes) => ({type: 'DELETED_RECIPE', payload: recipes})

export const getRecipes = () => {
    return (dispatch) => {
        fetch(url)
        .then(r => r.json())
        .then(json => {
            dispatch(setRecipes(json))
        })
    }   
}

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

export const deleteRecipe = (props) => {
    return (dispatch) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(props.recipe)
        }
        fetch(url + `/${parseInt(props.id)}`, configObj)
        .then(r => r.json())
    }
}