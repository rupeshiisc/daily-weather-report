import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import WeatherDashboard from './../WeatherDashboard';
import Spinner from "./../../Spinner";
import useFetch from "./../../services/useWeatherFetchHook";
import WeatherTable from './../WeatherTable';


Enzyme.configure({ adapter: new EnzymeAdapter()});

function renderComponent() {
    const wrapper = () => shallow(<WeatherDashboard />);
    return wrapper;
}

const mockWeatherData = {
    "sol_keys": [
        "675",
        "676"
      ],
      "675": {
        "AT": {
          "av": -62.314,
          "ct": 177556,
          "mn": -96.872,
          "mx": -15.908
        },
        "First_UTC": "2020-10-19T18:32:20Z",
        "HWS": {
          "av": 7.233,
          "ct": 88628,
          "mn": 1.051,
          "mx": 22.455
        },
        "Last_UTC": "2020-10-20T19:11:55Z",
        "Month_ordinal": 10,
        "Northern_season": "early winter",
        "PRE": {
          "av": 750.563,
          "ct": 887776,
          "mn": 722.0901,
          "mx": 768.791
        },
        "Season": "fall",
        "Southern_season": "early summer",
        "WD": {
          "0": {
            "compass_degrees": 0,
            "compass_point": "N",
            "compass_right": 0,
            "compass_up": 1,
            "ct": 254
          },
          "1": {
            "compass_degrees": 22.5,
            "compass_point": "NNE",
            "compass_right": 0.382683432365,
            "compass_up": 0.923879532511,
            "ct": 1
          },
          "9": {
            "compass_degrees": 202.5,
            "compass_point": "SSW",
            "compass_right": -0.382683432365,
            "compass_up": -0.923879532511,
            "ct": 67
          },
          "10": {
            "compass_degrees": 225,
            "compass_point": "SW",
            "compass_right": -0.707106781187,
            "compass_up": -0.707106781187,
            "ct": 8618
          },
          "11": {
            "compass_degrees": 247.5,
            "compass_point": "WSW",
            "compass_right": -0.923879532511,
            "compass_up": -0.382683432365,
            "ct": 1912
          },
          "12": {
            "compass_degrees": 270,
            "compass_point": "W",
            "compass_right": -1,
            "compass_up": 0,
            "ct": 19517
          },
          "13": {
            "compass_degrees": 292.5,
            "compass_point": "WNW",
            "compass_right": -0.923879532511,
            "compass_up": 0.382683432365,
            "ct": 30283
          },
          "14": {
            "compass_degrees": 315,
            "compass_point": "NW",
            "compass_right": -0.707106781187,
            "compass_up": 0.707106781187,
            "ct": 25962
          },
          "15": {
            "compass_degrees": 337.5,
            "compass_point": "NNW",
            "compass_right": -0.382683432365,
            "compass_up": 0.923879532511,
            "ct": 2014
          },
          "most_common": {
            "compass_degrees": 292.5,
            "compass_point": "WNW",
            "compass_right": -0.923879532511,
            "compass_up": 0.382683432365,
            "ct": 30283
          }
        }
      },
      "676": {
        "AT": {
          "av": -62.812,
          "ct": 177554,
          "mn": -96.912,
          "mx": -16.499
        },
        "First_UTC": "2020-10-20T19:11:55Z",
        "HWS": {
          "av": 8.526,
          "ct": 88250,
          "mn": 1.11,
          "mx": 26.905
        },
        "Last_UTC": "2020-10-21T19:51:31Z",
        "Month_ordinal": 10,
        "Northern_season": "early winter",
        "PRE": {
          "av": 749.09,
          "ct": 887777,
          "mn": 722.473,
          "mx": 767.1426
        },
        "Season": "fall",
        "Southern_season": "early summer",
        "WD": {
          "0": {
            "compass_degrees": 0,
            "compass_point": "N",
            "compass_right": 0,
            "compass_up": 1,
            "ct": 463
          },
          "1": {
            "compass_degrees": 22.5,
            "compass_point": "NNE",
            "compass_right": 0.382683432365,
            "compass_up": 0.923879532511,
            "ct": 45
          },
          "2": {
            "compass_degrees": 45,
            "compass_point": "NE",
            "compass_right": 0.707106781187,
            "compass_up": 0.707106781187,
            "ct": 4
          },
          "5": {
            "compass_degrees": 112.5,
            "compass_point": "ESE",
            "compass_right": 0.923879532511,
            "compass_up": -0.382683432365,
            "ct": 2
          },
          "10": {
            "compass_degrees": 225,
            "compass_point": "SW",
            "compass_right": -0.707106781187,
            "compass_up": -0.707106781187,
            "ct": 2749
          },
          "11": {
            "compass_degrees": 247.5,
            "compass_point": "WSW",
            "compass_right": -0.923879532511,
            "compass_up": -0.382683432365,
            "ct": 4862
          },
          "12": {
            "compass_degrees": 270,
            "compass_point": "W",
            "compass_right": -1,
            "compass_up": 0,
            "ct": 20685
          },
          "13": {
            "compass_degrees": 292.5,
            "compass_point": "WNW",
            "compass_right": -0.923879532511,
            "compass_up": 0.382683432365,
            "ct": 31167
          },
          "14": {
            "compass_degrees": 315,
            "compass_point": "NW",
            "compass_right": -0.707106781187,
            "compass_up": 0.707106781187,
            "ct": 25783
          },
          "15": {
            "compass_degrees": 337.5,
            "compass_point": "NNW",
            "compass_right": -0.382683432365,
            "compass_up": 0.923879532511,
            "ct": 2490
          },
          "most_common": {
            "compass_degrees": 292.5,
            "compass_point": "WNW",
            "compass_right": -0.923879532511,
            "compass_up": 0.382683432365,
            "ct": 31167
          }
        }
    }
}



test('WeatherDashboard component renders WeatherTable component', () => {
    const componentWrapper = renderComponent();
    // const mockUseFetch = jest.fn(useFetch).mockReturnValue(mockWeatherData);

    // componentWrapper.update();
})