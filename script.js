function post(){
    $.ajax('http://localhost:3000/posts', {
        method: 'POST',
        data: {
            title: '000000000000000000000',
            body: 'bar',
            userId: 1
        }
    }).then(function(data) {
        console.log(data);
    });
}