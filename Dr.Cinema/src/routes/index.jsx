import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

// ADD VIEWS HERE
import Home from '../views/HomeView';
import CinemaDetailsView from '../views/CinemaDetailsView';
import MovieDetailsView from '../views/MovieDetailsView';
import UpcomingView from '../views/UpcomingView';



const StackNavigator = createStackNavigator({
    Home,
    CinemaDetailsView,
    MovieDetailsView,
});

const SecondStackNavigator = createStackNavigator({
  UpcomingView,
});

const AppNavigator = createDrawerNavigator({
    Cinemas: StackNavigator,
    Upcoming: SecondStackNavigator


  });

export default createAppContainer(AppNavigator);
