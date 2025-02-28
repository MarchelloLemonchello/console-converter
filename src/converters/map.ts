import {TAny, TTypeConverter} from "../types";

export type TMap = {
  type: "map";
  value: TMapItem[]
}

export type TMapItem = {
  type: "mapItem";
  value: {
    key: TAny,
    value: TAny
  }
}
export const MapConverter: TTypeConverter = (value, converterFunction) => {
  if (!(value instanceof Map)){
    throw new Error()
  }
  const mapValue: TMapItem[] = [];
  value.forEach((val,key) => {
    const mapItem = {
      type: "mapItem",
      value: {
        key: converterFunction(key),
        value: converterFunction(val)
      }
    } as const
    mapValue.push(mapItem)
  })

  return {
    type: 'map',
    value: mapValue
  } as TMap;
}