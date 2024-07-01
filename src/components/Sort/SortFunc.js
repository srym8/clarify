function merge(left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // Move to the next element in the `left` array
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // Move to the next element in the `right` array
        }
    }

    // Concatenate the remaining elements from either `left` or `right` (if any)
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function mergeSort(array) {
    // Base case: If the array has only one element, return it (already sorted)
    if (array.length === 1) {
        return array;
    }

    // Divide the array into two halves
    const middle = Math.floor(array.length / 2); // Find the middle index
    const left = array.slice(0, middle); // Split the array into left half
    const right = array.slice(middle); // Split the array into right half

    // Recursively call mergeSort on the left and right halves
    return merge(
        mergeSort(left), // Recursively sort the left half
        mergeSort(right) // Recursively sort the right half
    );
}

export default mergeSort