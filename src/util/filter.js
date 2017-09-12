/**
 * 格式化时间
 * 
 * @param {String} str
 * @returns 格式化后的时间
 */
export const formatDate = (str) => {
    if (!str) return ''
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return ''
    } else if ((time / 1000 < 30)) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前'
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else {
        return parseInt(time / 31536000000) + '年前'
    }
}

// export const formatDate = (str) => {
//     if (!str) return ''
//     var date = new Date(str)//new Date(那个格式的时间) 变成中国标准时间 new Date()
//     console.log(date)
//     var year = date.getFullYear();
//     var month = date.getMonth() + 1;
//     var day = date.getDate();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     month = month < 10 ? '0' + month : month; // 格式化月份，小于10前置0
//     day = day < 10 ? '0' + day : day; // 格式化日期，小于10前置0;
//     hours = hours < 10 ? '0' + hours : hours; // 格式化月份，小于10前置0
//     minutes = minutes < 10 ? '0' + day : day; // 格式化日期，小于10前置0;
//     seconds = seconds < 10 ? '0' + seconds : seconds; // 格式化月份，小于10前置0
//     console.log(year+"-"+month+"-"+day);
//     return year+"-"+month+"-"+day+" "+ hours+":"+minutes+":"+seconds;
// }