// Assumptions
const dailyFeeRevenue = 20000; // In dollars
const initialFeeRevenue = dailyFeeRevenue * 365; // Convert daily revenue to annual
const growthRate = 0.10; // 10% annual growth during projection period
const years = 5; // 5-year projection
const discountRate = 0.15; // 15% discount rate; make sure discount rate > growth rate!
const terminalGrowth = 0.03; // 3% perpetual growth beyond projection period into the future
const stakedTokens = 3_400_000_000; // 3.4 billion tokens staked

function stakingYieldValuation(feeRevenue, growthRate, discountRate, years, terminalGrowth, stakedTokens) {
    let stakingRewards = [];
    for (let t = 1; t <= years; t++) {
        feeRevenue *= (1 + growthRate);
        let discountedValue = feeRevenue / Math.pow((1 + discountRate), t);
        stakingRewards.push(discountedValue);
    }
    
    // Terminal Value Calculation
    let terminalValue = (feeRevenue * (1 + terminalGrowth)) / (discountRate - terminalGrowth);
    let discountedTerminalValue = terminalValue / Math.pow((1 + discountRate), years);
    
    // Summing present values
    let totalStakingValue = stakingRewards.reduce((acc, val) => acc + val, 0) + discountedTerminalValue;
    
    // Calculate implied staking yield per token
    let pricePerStakedToken = totalStakingValue / stakedTokens;
    
    return { stakingRewards, discountedTerminalValue, totalStakingValue, pricePerStakedToken };
}

// Run staking yield valuation model
const result = stakingYieldValuation(initialFeeRevenue, growthRate, discountRate, years, terminalGrowth, stakedTokens);

// Print results
console.log("Projected Discounted Staking Rewards: $", result.stakingRewards);
console.log("Discounted Terminal Value: $", result.discountedTerminalValue.toLocaleString());
console.log("Total Present Value of Staking Rewards: $", result.totalStakingValue.toLocaleString());
console.log("Implied Price Per Staked Token $:", result.pricePerStakedToken);
