const packagee = [
    { value: 0, label: "套餐一：原味螺蛳粉+网红炸弹+果汁（四元果汁任选）", money: "17元" },
    { value: 1, label: "套餐二：原味螺蛳粉+虎皮蛋/煎蛋+果汁（四元果汁任选）", money: "16元" },
    { value: 2, label: "套餐三：原味螺蛳粉+腊肠+果汁（四元果汁任选）", money: "17元" },
    { value: 3, label: "套餐四：原味螺蛳粉+网红炸蛋+玉米汁", money: "18元" },
    { value: 4, label: "套餐五：原味螺蛳粉+虎皮蛋/煎蛋+玉米汁", money: "17元" },
    { value: 5, label: "套餐六：原味螺蛳粉+响铃卷+海碧/纯净水", money: "16元" },
    { value: 6, label: "套餐七：原味螺蛳粉+网红炸蛋+海碧/纯净水", money: "16元" },
    { value: 7, label: "套餐八：原味螺蛳粉+烤肠+海碧/纯净水", money: "17元" },
]
const Ordinary = [
    { value: 0, label: "原味螺蛳粉", money: "12元" },
    { value: 1, label: "招牌螺蛳粉", money: "14元" },
    { value: 2, label: "牛肉螺蛳粉", money: "16元" },
    { value: 3, label: "肥肠螺蛳粉", money: "16元" },
    { value: 4, label: "鸡丁螺蛳粉", money: "15元" },
    { value: 5, label: "干拌螺蛳粉", money: "12元" },
    { value: 6, label: "两掺螺蛳粉", money: "13元" },
]
const addfood = [
    { value: 0, label: "涮毛肚", money: "10元" },
    { value: 1, label: "一两粉", money: "1元" },
    { value: 2, label: "二两粉", money: "2元" },
    { value: 3, label: "网红炸蛋", money: "3元" },
    { value: 4, label: "虎皮蛋", money: "2元" },
    { value: 5, label: "煎蛋", money: "2元" },
    { value: 6, label: "螺肉", money: "2元" },
    { value: 7, label: "豆泡", money: "2元" },
    { value: 8, label: "生菜", money: "2元" },
    { value: 9, label: "虎皮鸡爪", money: "4元" },
    { value: 10, label: "烤肠", money: "4元" },
    { value: 11, label: "腊肠", money: "3元" },
    { value: 12, label: "炸腐竹", money: "3元" },
    { value: 13, label: "酸笋", money: "3元" },
    { value: 14, label: "响铃卷", money: "3元" },
    { value: 15, label: "鸡蛋面", money: "2元" },
    { value: 16, label: "豆串", money: "2元" },
    { value: 17, label: "加汤", money: "2元" },
]
const other = [
    { value: 0, label: "手抓饼", money: "3元" },
    { value: 1, label: "牛肉馅饼", money: "5元" },
    { value: 2, label: "小混沌", money: "8元" },
    { value: 3, label: "大混沌", money: "12元" },
]
window.foodList = {
    packagee,
    Ordinary,
    addfood,
    other
}
export default {
    packagee,
    Ordinary,
    addfood,
    other

}