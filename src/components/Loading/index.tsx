import {ActivityIndicator} from 'react-native';


interface Props{
  color:string;
  size:number;
}
export function Loading({color,size}:Props){

  return (
    <ActivityIndicator
      color={color}
      size={size}
    />
  )
}