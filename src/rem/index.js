import { Dimensions } from "react-native";
const _width = Dimensions.get("window").width;

let rem;

if (_width >= 600) {
  rem = _width / 1440;
} else {
  rem = _width / 1080;
}

export default rem;