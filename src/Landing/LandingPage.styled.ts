import styled, { keyframes } from 'styled-components'


export const LandingPageMainContainer = styled.div``

export const ImgLoadingComponent = styled.img`
    position: absolute;
    top: -5000px;
    visibility: hidden;
`

export const RippleWrapper = styled.div`
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const RippleAnimation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

export const RippleContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`

export const RippleDiv = styled.div`
  position: absolute;
  border: 4px solid black;
  opacity: 1;
  border-radius: 50%;
  animation: ${RippleAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`

export const LoadingText = styled.div`
    position: absolute;
    bottom: -25px;
    text-align: center;
    font-weight: bold;
`
