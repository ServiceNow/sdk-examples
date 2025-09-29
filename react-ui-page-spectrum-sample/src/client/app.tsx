import { Button, defaultTheme, Provider } from '@adobe/react-spectrum'

export default function App() {
    return (
        <Provider theme={defaultTheme}>
            <div>
                <h1>Welcome to my app</h1>
                <Button variant="accent" onPress={() => alert('Hey there!')}>
                    Hello React Spectrum!
                </Button>
            </div>
        </Provider>
    )
}
