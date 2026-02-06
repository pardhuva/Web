


const initialState = {mode : "light"};

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME" :
            return {
                ...state,
                mode: state.mode === "light" ? "dark" : "light",
            };
        def
    }
}

const [state, dispatch] = useReducer(counterReducer, 0);
