const recipeReducer = (state = {toys: [], loading: false}, action) => {
    switch(action.type){
        case "GOT_RECIPES":
            return {...state, recipes: action.payload, loading: false}
        case "ADDED_TOY":
            return {...state, recipes: [...state.recipes, action.payload]}
        case "LOADING":
            return {...state, loading: true}
        default:
            return state
    }
}

export default recipeReducer