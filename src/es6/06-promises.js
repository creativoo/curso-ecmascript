const anoterFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve ('Hey!!');
        } else {
            reject ('Whooooops!');
        }
    })
}

anoterFunction ()
    .then(response => console.log(response))
    .catch(err=> console.log(err));