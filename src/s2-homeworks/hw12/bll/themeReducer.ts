const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeIdActionType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

type InitialStateType = typeof initState
type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>