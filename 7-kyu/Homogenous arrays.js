function filterHomogenous(arrays) {
    let result = [];

    const isHomogenous = (array) => {
        const type = typeof array[0];
        let homogenous = true;

        if (type === "undefined") {
            return false;
        }

        array.forEach((item) => {
            if (typeof item !== type) {
                homogenous = false;
            }
        });

        return homogenous;
    }

    arrays.forEach((array) => {
        if (isHomogenous(array)) {
            result.push(array);
        }
    });

    return result;
}

//if you want to do it shorter:

function filterHomogenous2(arrays) {
    return arrays.filter(subArray => subArray.length > 0 && (subArray.every(element => typeof element === typeof subArray[0])));
}
