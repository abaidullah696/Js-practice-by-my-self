function getRandomHexColor() {
    // Generate a random number between 0 and 16777215 (0xFFFFFF in hexadecimal)
    const randomNumber = Math.floor(Math.random() * 16777215);
    
    // Convert the number to a hexadecimal string and pad it with leading zeros if necessary
    const hexColor = randomNumber.toString(16).padStart(6, '0');
    
    // Add the '#' symbol to the beginning of the string to form a valid hex color code
    return `#${hexColor}`;
}

// Example usage
console.log(getRandomHexColor());
