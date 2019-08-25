
/* istanbul ignore next */
const generatorFunc = (numbers) => {

    console.log('dkdkdshould work', numbers);
const phoneNumbers = [];
for (let i = 0; i < numbers; i++) {
    const randomDigits = Math.ceil(Math.random() * 100000000) + '';
    console.log('dkdkd', randomDigits);
    if (randomDigits.length <= 9) {
      phoneNumbers.push('01' + randomDigits + Math.floor(Math.random() * 10));
    } else if (randomDigits.length > 9) {
        phoneNumbers.push('01' + randomDigits.slice(0, -1));
    } else {
        phoneNumbers.push('01' + randomDigits)
    }
    }
    return phoneNumbers;
} 

export default generatorFunc;