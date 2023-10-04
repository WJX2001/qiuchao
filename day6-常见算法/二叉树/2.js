/**
 * @param {number[][]} grid
 * @return {number}
 */
const numDistinctIslands = (grid) => {
  const m = grid.length
  const n = grid[0].length
  // 记录所有序列化结果
  const islands = new Set()

  const dfs = (i, j, sb, dir) => {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
      return
    }
    // 前序遍历位置：进入(i,j)
    grid[i][j] = 0
    sb.push(`${dir},`)

    dfs(i - 1, j, sb, 1) // up
    dfs(i + 1, j, sb, 2) // down
    dfs(i, j - 1, sb, 3) // left
    dfs(i, j + 1, sb, 4) // right

    sb.push(`${-dir},`)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        // 淹掉这个岛屿，同时存储岛屿的序列化结果
        const sb = []
        // 初始化的方向可以随便写，不影响正确性
        dfs(i, j, sb, 666)
        islands.add(sb.join(''))
      }
    }
  }
  // 不相同的岛屿数量
  return islands.size
}
