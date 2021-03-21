const recipeReducer = (state = {recipes: []}, action) => {
    switch(action.type){
        case "GOT_RECIPES":
            return {...state, recipes: action.payload}
        case "ADDED_RECIPE":
            return {...state, recipes: [...state.recipes.data, action.payload]}
        case "DELETE_RECIPE":
            if (state.recipes.data) {
                return {recipes: state.recipes.data.filter(r => r !== action.payload)}
            }
        default:
            return state
    }
}

export default recipeReducer