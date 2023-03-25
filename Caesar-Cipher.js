function rot13(str) {
    var decoded = "";
      for (var i = 0; i < str.length; i++) {
          var charCode = str.charCodeAt(i);
              if (charCode >= 65 && charCode <= 90) { // Check if uppercase letter
                    charCode = ((charCode - 65 + 13) % 26) + 65; // Apply ROT13 cipher
                        }
                            decoded += String.fromCharCode(charCode);
                              }
                                return decoded;
                                }

                                // Testing the function with the given test cases
                                console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP
                                console.log(rot13("SERR CVMMN!")); // Output: FREE PIZZA!
                                console.log(rot13("SERR YBIR?")); // Output: FREE LOVE?
                                console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.