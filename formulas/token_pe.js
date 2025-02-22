// Assumptions
const dailyFeeRevenue = 20000; // In dollars
const initialFeeRevenue = dailyFeeRevenue * 365; // Convert daily revenue to annual
const stakedTokens = 3_400_000_000; // 3.4 billion tokens staked
const tokenPrice = 0.30; // Current token price in USD

function stakingPEValuation(feeRevenue, stakedTokens, tokenPrice) {
    // Annual earnings per token (staking rewards per staked token)
    let earningsPerToken = feeRevenue / stakedTokens;
    
    // P/E Ratio equivalent for staking tokens
    let stakingPE = tokenPrice / earningsPerToken;
    
    return { earningsPerToken, stakingPE };
}

// Run staking P/E valuation model
const peResult = stakingPEValuation(initialFeeRevenue, stakedTokens, tokenPrice);

// Print results
console.log("Annual Earnings Per Staked Token: $", peResult.earningsPerToken);
console.log("Staking P/E Ratio:", peResult.stakingPE);
