export const calculateMaxHeight = () => {
  const windowInnerHeight = document.documentElement.clientHeight
  // 233 - это все размер блоков выше. Верхний отступ 50, блок 65, отступ после него 50, блок с табами 48, и отступ после него 20
  return windowInnerHeight - 233
}
