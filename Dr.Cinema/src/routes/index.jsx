import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// ADD VIEWS HERE
import Home from '../views/HomeView';
import CinemaDetailsView from '../views/CinemaDetailsView';
import MovieDetailsView from '../views/MovieDetailsView';


const StackNavigator = createStackNavigator({
    Home,
    CinemaDetailsView,
    MovieDetailsView,
});

export default createAppContainer(StackNavigator);
