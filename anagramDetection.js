var isAnagram = function(test, original) {
    let a = test.toLowerCase().split("").sort().join("");
    let b = original.toLowerCase().split("").sort().join("");
    if(a===b) return true;
    else return false;
  };

  Test.assertEquals(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
  Test.assertEquals(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
  Test.assertEquals(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')
  
  Test.assertEquals(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
  Test.assertEquals(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
  Test.assertEquals(isAnagram("apple", "pale"), false, 'Same letters, but different count')