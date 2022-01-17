/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var mappedPatterns = {
        
    };
    
    var splitPat = pattern.split("");
    var splitS = s.split(" ");
    if(splitPat.length != splitS.length) return false;
    for(var i = 0; i < splitPat.length; i++) {
        if(mappedPatterns[splitPat[i]] == null) {
            for (var key in mappedPatterns) {
               if (mappedPatterns.hasOwnProperty(key)) {
                  if(mappedPatterns[key] == splitS[i]) {
                      return false;
                  }
               }
            }
            mappedPatterns[splitPat[i]] = splitS[i];
        } else {
            if(mappedPatterns[splitPat[i]] != splitS[i]) {
                return false;
            }
        }
        
    }
    
    return true;
};
