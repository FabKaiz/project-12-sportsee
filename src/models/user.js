class UserFormatter {
  constructor(userMainData, userActivity, userPerformance, userAverageSessions) {
    this.user = {};
    this.user.userInfos = userMainData.userInfos;
    this.user.score = userMainData.todayScore ? userMainData.todayScore : userMainData.score;
    this.user.keyData = userMainData.keyData;
    this.user.sessions = userActivity.sessions;
    this.user.performance = userPerformance;
    this.user.averageSessions = userAverageSessions;
  }

  getUser() {
    return this.user;
  }
}

export default UserFormatter;
