/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: InitialState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canUser: loginUser,
    // 如果loginUser存在，并且用户角色为 'admin',说明该用户是管理员
    canAdmin: loginUser?.userRole === 'admin',
  };
}
