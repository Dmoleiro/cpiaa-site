import underConstructionAssetSmall from './backgrounds/under-construction-bg-small.jpg'
import underConstructionAsset from './backgrounds/under-construction-bg.jpg'
import cpiaaLogo from './cpiaa-logo.svg'
import alexandra from './photos/alexandra.jpeg'
import daniela from './photos/daniela.png'

const assets = (): AssetToLoad[] => {
    return [
        { src: underConstructionAssetSmall, isLoaded: false },
        { src: underConstructionAsset, isLoaded: false },
        { src: cpiaaLogo, isLoaded: false },
        { src: daniela, isLoaded: false },
        { src: alexandra, isLoaded: false },
    ]
}

export default assets