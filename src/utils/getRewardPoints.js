const MIN_AMOUNT = 50;
const DOUBLE_POINTS_AMOUNT = 100;

const getRewardPoints = (transactions) =>
  transactions.reduce((rewardPoints, transaction) => {
    const doublePoints = transaction.amount - DOUBLE_POINTS_AMOUNT;

    if (doublePoints > 0) {
      rewardPoints += doublePoints * 2 + MIN_AMOUNT;
    }

    if (transaction.amount > 50 && doublePoints <= 0) {
      rewardPoints += transaction.amount - MIN_AMOUNT;
    }

    return rewardPoints;
  }, 0);

export { getRewardPoints };
