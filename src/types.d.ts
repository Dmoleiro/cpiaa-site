interface AssetToLoad {
    src: string
    isLoaded: boolean
}

interface StoreState {
    mainScreenSlice: MainSliceState
}

interface MainSliceState {
    selectedTabIndex: number
}