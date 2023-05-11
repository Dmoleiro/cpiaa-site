import underConstructionAssetSmall from './backgrounds/under-construction-bg-small.jpg'
import underConstructionAsset from './backgrounds/under-construction-bg.jpg'
import cpiaaLogo from './cpiaa-logo.svg'

const assets = (): AssetToLoad[] => {
    return [
        { src: underConstructionAssetSmall, isLoaded: false },
        { src: underConstructionAsset, isLoaded: false },
        { src: cpiaaLogo, isLoaded: false },
    ]
}

export default assets