// Staking APY's
// 30 - 10%
// 60 - 12.79%
// 90 - 17.29%
// 120 - 22.18%
// Minimum 0.001 NAPA
// Interest Period 1 Day

// Minimum 0.001 NAPA
// Interest Period 1 Day
// Redemption Period 1 Day

export function calculateAPY(principal: number, interestRate: number, compoundingPeriods: number) {
    // Convert the interest rate to a decimal
    var decimalInterest = interestRate / 100;

    // Calculate the APY using the formula
    var apy = (1 + (decimalInterest / compoundingPeriods)) ** compoundingPeriods - 1;

    // Calculate the total balance after one year
    var totalBalance = principal * (1 + apy);

    // Return the APY and total balance as an object
    return {
        apy: apy,
        totalBalance: totalBalance
    };
}

// Example usage
var result = calculateAPY(1000, 22.18, 120);
console.log("APY: " + (result.apy * 100).toFixed(2) + "%");
console.log("Total balance after one year: $" + result.totalBalance.toFixed(2));
