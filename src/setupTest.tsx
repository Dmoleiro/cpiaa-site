import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './store'
import { mainTheme } from './theme.styled'



export const renderComponent = (
    ui: React.ReactElement
) => {

    //@ts-ignore
    const Wrapper: React.FC = ({ children }) => (
        <Provider store={store}>
            <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
        </Provider>
    )
    return { wrapper: render(ui, { wrapper: Wrapper }), store }
}