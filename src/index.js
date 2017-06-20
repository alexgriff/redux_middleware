import ReactDOM from 'react-dom';
import configureStore from './configureStore'
import App from './App';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(configureStore(), document.getElementById('root'));
