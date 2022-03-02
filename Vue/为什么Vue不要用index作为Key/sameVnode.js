function same(a, b) {
  return (
    a.key === b.key && (
      a.tag === b.tag &&
      a.isComment === b.isComment &&
      isDef(a.data) === isDef(b.data) &&
      sameInputType(a, b)
    )
  )
}

//  a.tag===b.tag 重量级操作 