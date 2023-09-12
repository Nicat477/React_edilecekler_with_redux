export const EKLE = "EKLE";
export const TEMIZLE = "TEMIZLE";
export const ISARETLE = "ISARETLE";
export const addtobasket = (text) => {
  return { type: EKLE, payload: text };
};
export const completed = (id) => {
  return { type: ISARETLE, payload: id };
};
export const deletecomp = () => {
  return { type: TEMIZLE };
};
