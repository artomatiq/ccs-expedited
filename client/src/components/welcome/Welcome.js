import './Welcome.css'
import AuthButton from '../auth/AuthButton'

console.log('Welcome before render');

function Welcome() {
    console.log('rendering welcome');

    return (
        <AuthButton/>
    );
}

export default Welcome;