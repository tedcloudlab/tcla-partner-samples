// 注文の合計金額を計算する最小のサンプル
function orderTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

module.exports = { orderTotal };
