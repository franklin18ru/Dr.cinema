import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

// ADD VIEWS HERE
import Home from '../views/HomeView';
import CinemaDetailsView from '../views/CinemaDetailsView';
import MovieDetailsView from '../views/MovieDetailsView';



const StackNavigator = createStackNavigator({
    Home,
    CinemaDetailsView,
    MovieDetailsView,
});

const AppNavigator = createDrawerNavigator({
    Dashboard: StackNavigator
  });

export default createAppContainer(AppNavigator);
