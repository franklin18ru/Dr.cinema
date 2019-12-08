import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// ADD VIEWS HERE
import Home from '../views/HomeView';
import CinemaDetailsView from '../views/CinemaDetailsView';



const StackNavigator = createStackNavigator({
    Home,
    CinemaDetailsView,
});

export default createAppContainer(StackNavigator);
