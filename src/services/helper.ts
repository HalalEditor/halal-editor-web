export const validateEmail = (email: string) => {
  const re = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
  );
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  const re = new RegExp("(?=.{6,})");
  return re.test(String(password).toLowerCase());
};

export const delay = (millisecond: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, millisecond);
  });
};

export const getIdFromBarcode = (barcode: string): string => {
  return padLeft(barcode, "0", 13);
};

export const arrayToDictionary = (list: any[], keyPath: string): {} => {
  return list.reduce((list, value) => {
    list[value[keyPath]] = value;
    return list;
  }, {});
};

export const padLeft = (text: string, padChar: string, size: number): string => {
  return (String(padChar).repeat(size) + text).substr(size * -1, size);
};

export const getDeviceId = () => {
  let deviceId = localStorage.getItem("deviceId");

  if (!deviceId) {
    deviceId = newGuid();
    localStorage.setItem("deviceId", deviceId);
  }

  return deviceId;
};

export const newGuid = (length?: number) => {
  let id = "xxxxxxxxxxxxxxxxyxxxyxxxxyxx".replace(/[xy]/g, c => {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  return !!length ? id.substring(0, length) : id;
};
