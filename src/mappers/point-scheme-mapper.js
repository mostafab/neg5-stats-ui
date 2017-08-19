export const mapTossupValues = ps => {
  const mapped = Object.assign([], ps.map(mapSingleTossupValue));
  return mapped.sort((a, b) => b.value - a.value);
};

export const mapSingleTossupValue = tv => ({
  answerType: tv.type,
  value: tv.value,
});

export default {
  mapTossupValues,
  mapSingleTossupValue,
};
