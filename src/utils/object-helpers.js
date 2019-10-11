export const updateObjectInArray = (items,userId, objPropName, newObjectProps) => {
  return items.map(u => {
    if (u[objPropName] === userId) {
      return {...u, ...newObjectProps}
    }
    return u;
  })
}