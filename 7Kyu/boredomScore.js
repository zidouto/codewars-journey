function boredom(staff){
    const boredomScores = {
        'accounts': 1,
        'finance': 2,
        'canteen': 10,
        'regulation': 3,
        'trading': 6,
        'change': 6,
        'IS': 8,
        'retail': 5,
        'cleaning': 4,
        'pissing about': 25,
    };

    let score = 0
    for (const member in staff) {
        const department = staff[member];
        console.log(department)
        score += boredomScores[department]
    }
    if (score <= 80) {
        return 'kill me now';
    } else if (score < 100) {
        return 'i can handle this';
    } else {
        return 'party time!!';
    }
}

console.log(boredom({tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance' }))