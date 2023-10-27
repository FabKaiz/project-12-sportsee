export default function setUser(userMainData, userActivity, userPerformance, userAverageSessions) {
  const user = {}
  user.userInfos = userMainData.userInfos
  user.score = userMainData.todayScore ? userMainData.todayScore : userMainData.score
  user.keyData = userMainData.keyData
  user.sessions = userActivity.sessions
  user.performance = userPerformance
  user.averageSessions = userAverageSessions

  return user
}