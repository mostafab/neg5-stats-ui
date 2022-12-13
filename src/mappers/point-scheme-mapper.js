import { orderBy } from "lodash";

export const mapTossupValues = (ps) => {
  return orderBy(ps.map(mapSingleTossupValue), ["value"], ["desc"]);
};

export const mapSingleTossupValue = (tv) => ({
  answerType: tv.answerType,
  value: tv.value,
});

export default {
  mapTossupValues,
  mapSingleTossupValue,
};
