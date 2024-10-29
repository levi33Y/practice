/**
 * 将虚拟 DOM 转换为真实 DOM 并添加到容器中
 * @param {element} 虚拟 DOM
 * @param {container} 真实 DOM
 */
export function render(element, container) {
  const _isProperty = (key) => key !== "children";

  // 处理文本节点和标签节点
  const dom =
    element.type == "TEXT_ELEMENT" || !element?.type
      ? document.createTextNode(element)
      : document.createElement(element.type);

  // 为节点绑定属性
  element?.props &&
    Object.keys(element.props)
      .filter(_isProperty)
      .forEach((name) => {
        dom[name] = element.props[name];
      });

  // 处理孩子节点
  if (element?.props?.children) {
    Array.isArray(element?.props?.children)
      ? element.props.children.forEach((child) => render(child, dom))
      : render(element?.props?.children, dom);
  }

  // 添加到容器
  container.appendChild(dom);
}
