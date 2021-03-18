const recipeReducer = (state = {recipes: []}, action) => {
    switch(action.type){
        case "GOT_RECIPES":
            return {...state, recipes: action.payload}
        case "ADDED_RECIPE":
            return {...state, recipes: [...state.recipes["data"], action.payload]}
        default:
            return state
    }
}

export default recipeReducer