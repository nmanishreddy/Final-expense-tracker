import {Category} from './transaction'
import { CategoryAction, Categorystate } from "../types/types";
import * as actionType from "./actiontypes";

const initialTransactions: Categorystate = {

    categories : [
        {
            id:1,
            name: 'newcategory1',
            type: 'income'
        },
        {
            id:2,
            name: 'newcategory2',
            type: 'expense'
        }
    ]

    
}

const categoryReducer = (state: Categorystate = initialTransactions, action: CategoryAction): Categorystate => {
    switch (action.type) {
        
        
        case actionType.ADD_CATEGORY: 
            const newCategory : Category ={
                id: Math.random(),
                name : action?.category.name,
                type: action?.category.type
            }
            return {
                ...state,
                categories: state.categories.concat(newCategory)
            }

        
    }

    return state;
}

export default categoryReducer;

// case 'ADD_CATEGORY':
// return {...state, categories: [...list, {}]}