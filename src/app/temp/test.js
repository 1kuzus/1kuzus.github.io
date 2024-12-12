db.collection('views')
    .doc('views_posts-computer-to-TV-wireless-cast-with-sunshine-and-moonlight-index.md')
    // .doc('views_posts-show-like-and-view-on-blog-index.md')
    .get()
    .then((doc) => {
        if (doc.exists) console.log('doc.data:', doc.data());
        else console.log("doc doesn't exist!");
    });

db.collection('views')
    .doc('views_posts-show-like-and-view-on-blog-index.md')
    // .doc('views_posts-computer-to-TV-wireless-cast-with-sunshine-and-moonlight-index.md')
    .set({
        views: '114514 evil hacker',
    })
    .then(() => {
        console.log('Done.');
    });

firebase
    .firestore()
    .collection('hexoCount')
    .doc('Hexo - Add View Count based on FireBase')
    .get()
    .then((doc) => {
        if (doc.exists) console.log('doc.data:', doc.data());
        else console.log("doc doesn't exist!");
    });

firebase
    .firestore()
    .collection('hexoCount')
    .doc('Hexo - Add View Count based on FireBase')
    .set({
        count: 114514,
    })
    .then(() => {
        console.log('Done.');
    });

const x = firebase.database().ref().child('pageviews').child(slug(window.location.pathname));

x.on('value', function (t) {
    var n = t.val();
    console.log('this is value', n);
});

const y = firebase.database().ref().child('currentlyReading');
y.transaction(function (e) {
    return [
        {
            title: 'No No No No No No No No No No No No No No No No No No No No No No No No',
            url: "javascript:alert('No No No')",
            timestamp: 0,
        },
    ].concat(e.slice(0, e.length - 1));
});

firebase
    .firestore()
    .collection('views')
    .doc('test')
    .get()
    .then((doc) => {
        if (doc.exists) console.log('doc.data:', doc.data());
        else console.log("doc doesn't exist!");
    });
