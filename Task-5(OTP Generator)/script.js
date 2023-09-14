// Google Btn

googlebtn.addEventListener("click", (e) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        var user = result.user;
        document.getElementById("google-user").style.display = "flex";
        document.getElementById("google-user").innerHTML ="Welcome " + user.displayName;
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
      });
  });
  
  // facebook Btn 
  
  facebookbtn.addEventListener("click", (e) => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        var user = result.user;
        document.getElementById("facebook-user").style.display = "flex";
        document.getElementById("facebook-user").innerHTML ="Welcome " + user.displayName;
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
      });
  });
  
  // Github Btn 
  
  githubbtn.addEventListener("click", (e) => {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        var user = result.user;
        document.getElementById("github-user").style.display = "flex";
        document.getElementById("github-user").innerHTML ="Welcome " + user.displayName;
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
      });
  });
  
  
  // Phone Number
  render();
  function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    recaptchaVerifier.render();
  }
  
  function phoneAuth() {
    var number = document.getElementById("number").value;
    var phoneNumber = "+91" + number; // Replace with user's phone number
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        document.getElementById("sender").style.display = "none";
        document.getElementById("verifier").style.display = "block";
        
      })
      .catch(function (error) {
        alert(error.message);
      });
  }
  function verifyPhoneNumer() {
    var code = document.getElementById("verification-code").value;
    confirmationResult.confirm(code)
      .then(function () {
        document.getElementById("p-conf").style.display = "flex";
        document.getElementById("n-conf").style.display = "none";
      })
      .catch(function () {
        document.getElementById("p-conf").style.display = "none";
        document.getElementById("n-conf").style.display = "flex";
      });
  }