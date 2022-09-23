import { ImageProps } from "react-native";
import { NameIconType } from "../../constants/icons";

export interface IconOptionsProps {
    icon: NameIconType;
    size?: number;
    color?: string;
}

export interface IconProps extends ImageProps, IconOptionsProps {}