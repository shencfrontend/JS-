/**
 * @method myNew
 * @author jack shen
 * @return {Object} 通过构造函数生成的实例对象
 */
function myNew() {
  //创建了一个全新的对象
  const obj = {};
  //获取构造函数
  const Constructor = [].shift.call(arguments);
  //将新对象的__proto__指向其所属类的prototype对象
  obj.__proto__ = Constructor.prototype;
  //指向构造函数并将函数中的this指向新对象
  const result = Constructor.apply(obj, arguments);
  //返回这个新对象
  return typeof result === "object" ? result : obj;
}
