export const removeHeadersRelatedToNegs = (headers) =>
  headers.filter((h) => !h.measuresNeg);

export default {
  removeHeadersRelatedToNegs,
};
