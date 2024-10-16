export const ConvertToPersianDate = (datee) => {
    const date = Date.parse(datee);
    let persianDate = new Intl.DateTimeFormat("fa-IR").format(date);
    return persianDate;
  };