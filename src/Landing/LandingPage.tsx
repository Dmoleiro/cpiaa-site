

import { ReactElement, useEffect, useState } from 'react'
import * as Styled from './LandingPage.styled'

import UnderConstruction from './UnderConstruction'
import assets from '../assets/assets'

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

    const getLoadingIcon = (): ReactElement => {
        return (
            <Styled.RippleWrapper>
                <Styled.RippleContainer>
                    <Styled.RippleDiv />
                    <Styled.RippleDiv style={{ animationDelay: '-0.5s' }} />
                </Styled.RippleContainer>
                <Styled.LoadingText>Loading ...</Styled.LoadingText>
            </Styled.RippleWrapper>
        )
    }

    const getLandingContent = (): ReactElement => {
        if (isLoadingAssets) return getLoadingIcon()

        return <UnderConstruction />
    }

    return (
        <Styled.LandingPageMainContainer data-testid={LANDING_PAGE_CONTAINER_TEST_ID}>
            {getLandingContent()}
        </Styled.LandingPageMainContainer>
    )
}

export default LandingPage