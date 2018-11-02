import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Index = createStackNavigator(
    {
        STARGATE_HOME: HomeScreen,
        STARGATE_DETAILS: DetailsScreen
    },
    {
        headerMode: "none",
        initialRouteName: "STARGATE_HOME"
    }
)

export default Index