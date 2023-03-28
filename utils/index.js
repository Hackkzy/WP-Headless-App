export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};

export const encodeHTMLEntities = (rawStr) => {
  return rawStr.replace(/[\u00A0-\u9999<>\&]/g, (i) => `&#${i.charCodeAt(0)};`);
};

export const decodeHTMLEntities = (rawStr) => {
  return rawStr.replace(
    /&#(\d+);/g,
    (match, dec) => `${String.fromCharCode(dec)}`
  );
};
