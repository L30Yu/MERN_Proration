const calculate = (data) => {
    const result = {}

    const { allocation_amount, investor_amounts } = data;

    let averageSum = 0;
    let requestSum = 0;
    investor_amounts.forEach(item => {
        averageSum = averageSum + item.average_amount
        requestSum = requestSum + item.requested_amount
    })

    if (requestSum > allocation_amount) {
        let leftAllocation = allocation_amount;
        // need find out who's requested amount small than his average and small than allocation amount
        // so that we can let him get all his request amount and save into the result
        // and then calculate average sum for the left investors
        needAvg = investor_amounts
            .sort((a, b) => a.requested_amount - b.requested_amount)
            .filter(item => {
                if (item.requested_amount <= item.average_amount && item.requested_amount <= allocation_amount) {
                    
                    // direct add to result only if still has allocation
                    if (leftAllocation - item.requested_amount > 0) {
                        result[item.name] = item.requested_amount;
                        averageSum = averageSum - item.average_amount;
                        leftAllocation = leftAllocation - item.requested_amount;
                        return false;
                    } else {
                        return true;
                    }
                }
                return true
            })

        needAvg.forEach(item => {
            result[item.name] = leftAllocation * (item.average_amount / averageSum)

        })
        return result;
    }
    investor_amounts.forEach(item => {
        result[item.name] = item.requested_amount
    })
    return result;

}
module.exports.calculate = calculate
module.exports.postProration = async (req, res) => {
    res.send(calculate(req.body))
}
