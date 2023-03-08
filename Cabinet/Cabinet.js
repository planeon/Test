const firebaseConfig = {
    apiKey: "AIzaSyBKV4mhDjzZ9PWE0bWO-rWKXO9L57ZtMRc",
    authDomain: "fruits-64a34.firebaseapp.com",
    databaseURL: "https://fruits-64a34-default-rtdb.firebaseio.com",
    projectId: "fruits-64a34",
    storageBucket: "fruits-64a34.appspot.com",
    messagingSenderId: "989879805111",
    appId: "1:989879805111:web:a9bdc6827e478a45139932",
    measurementId: "G-HJR56P6EP0"
};


firebase.initializeApp(firebaseConfig);

function logout() {
    firebase.auth().signOut().then(() => {
        alert('Користувач вийшов з аккаунту');
        window.location.href = "file:///C:/Users/zenak/OneDrive/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/index.html";
    })
}