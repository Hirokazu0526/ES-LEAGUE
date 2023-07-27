export default ({ app }, inject) => {
  inject('formatDate', function (value) {
    const dateObj = new Date(value);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][dateObj.getDay()];

    return `${year}.${month}.${day}(${dayOfWeek})`;
  });
};
