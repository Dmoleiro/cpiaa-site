

import { ReactElement, Suspense, useEffect, useState } from 'react'
import * as Styled from './LandingPage.styled'

import assets from '../assets/assets'
import Loading from './Loading'
import UnderConstruction from './UnderConstruction'

export const LANDING_PAGE_CONTAINER_TEST_ID = 'landing-page-container-test-id'

const LandingPage: React.FC = () => {
    const [isLoadingAssets, toggleLoadingAssets] = useState<boolean>(true)

    useEffect(() => {
        isLoadingAssets && cacheAssets()
    })


    const cacheAssets = async (): Promise<void> => {
        const promises = await assets().map((asset: AssetToLoad) => {
            return new Promise<void>((resolve, reject) => {
                const img = new Image()
                img.src = asset.src
                // @ts-ignore
                img.onload = resolve()
                // @ts-ignore
                img.onerror = reject()
            })
        })
        await Promise.all(promises)
        toggleLoadingAssets(false)
    }

    const getLandingContent = (): ReactElement => {
        if (isLoadingAssets) return <Loading />

        return <UnderConstruction />
    }

    return (
        <Suspense fallback={<Loading />}>
            <Styled.LandingPageMainContainer data-testid={LANDING_PAGE_CONTAINER_TEST_ID}>
                {getLandingContent()}
            </Styled.LandingPageMainContainer>
        </Suspense>
    )
}

export default LandingPage