function palindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
      str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Check if string is equal to its reverse
          return str === str.split('').reverse().join('');
          }