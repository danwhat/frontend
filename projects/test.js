var longestPalindrome = function(s) {
  if (s.length == 0) return ""
  let maior = ""
  let space = 0

  for (let i = 0 ; i < s.length; i += 1 ) {   
    space = 0
    if (s[i] == s[i+1]) {
      while (s[i-space] == s[i+space+1] && s[i-space] != undefined && s[i+space] != undefined) {
        if (s.slice((i-space), (i+space+2)).length > maior.length) maior = s.slice((i-space), (i+space+2))
        space += 1
      }
    }
    space = 0
    if (s[i-1] == s[i+1]) {
      while (s[i-space-1] == s[i+space+1] && s[i-space-1] != undefined && s[i+space] != undefined) {
        if (s.slice((i-space-1), (i+space+2)).length > maior.length) maior = s.slice((i-space-1), (i+space+2))
        space += 1
      }
    } 
  }

   
   if (maior === 0 || s.length === 1 || maior === "") return s[0]
   return maior
};

console.log(`Resultado: ${longestPalindrome("ac")}`)

