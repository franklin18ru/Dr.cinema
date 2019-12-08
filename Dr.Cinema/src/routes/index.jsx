import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// ADD VIEWS HERE
import Home from '../views/HomeView';



const StackNavigator = createStackNavigator({
    Home,
    
});

export default createAppContainer(StackNavigator);