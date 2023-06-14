export const payoutsCategoryName = (category: string) => {
  if (category == '0') {
    return 'Waiting For Awards';
  } else if (category == '1') {
    return 'Step Your Game Up';
  } else if (category == '2') {
    return 'On Your Way to Stardom';
  } else if (category == '3') {
    return 'This Post is Fire';
  } else if (category == '4') {
    return 'Wait, Did You See That...';
  } else {
    return 'NAPA Sensation';
  }
};

export const calculateAmountEarned = (
  tokenPrice: number,
  payoutsCategory: string
) => {
  if (payoutsCategory == '0') {
    return (tokenPrice * 0).toFixed(2);
  } else if (payoutsCategory == '1') {
    return (tokenPrice * 0.2).toFixed(2);
  } else if (payoutsCategory == '2') {
    return (tokenPrice * 0.4).toFixed(2);
  } else if (payoutsCategory == '3') {
    return (tokenPrice * 0.6).toFixed(2);
  } else if (payoutsCategory == '4') {
    return (tokenPrice * 0.8).toFixed(2);
  } else {
    return (tokenPrice * 1.0).toFixed(2);
  }
};
