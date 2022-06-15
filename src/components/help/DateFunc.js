

export const DateFunc = (date) => {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    let HH = date.getHours();
    if (HH < 10) HH = '0' + HH;

    let MM = date.getMinutes();
    if (MM < 10) MM = '0' + MM;

    return     dd + '-' + mm + '-20' + yy + ' в ' + HH + ':' + MM;
}