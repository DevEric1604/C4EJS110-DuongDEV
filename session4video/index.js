// bài 1
function bai1() {
    let movie = {
        name: 'the dark knight rises',
        year: 2012,
        rate: 8.4,

    }
}
// bài 2.1

function bai21() {
    let movie = {
        name: 'the dark knight rises',
        year: 2012,
        rate: 8.4,
    }
    console.log(movie.name)
    console.log(movie['name'])
    console.log(movie.year)
    console.log(movie['year'])
    console.log(movie.rate)
    console.log(movie['rate'])
}
//bai2.2()

function bai22() {
    let movie = {
        name: 'the dark knight rises',
        year: 2012,
        rate: 8.4,
    }
    movie.drietor = 'Christopher Nolan';
    console.log(movie);
}
//bai2.3()

function bai23() {
    let movie = {
        name: 'the dark knight rises',
        year: 2012,
        rate: 8.4,
    }
    let b = prompt(' bạn muốn biết gì');
    if (b == 'name') {
        alert(movie.name);
    } else if (b == 'year') {
        alert(movie.year);
    } else if (b == 'rate') {
        alert(movie.rate);
    } else {
        alert(`${b}  dữ liệu này không tồn tại`);

    }

}
//bai3.1()

function ex31() {
    let movie = {
        name: 'the dark night rises',
        year: 2012,
        rate: 8.4,
    }
    movie.rate = 8.4;
    console.log(movie['rate']);
    movie.rate = movie.rate + 0.5;
    console.log(movie);
}
//bai3.2()

function ex32() {
    let movie = {
        title: 'The dark knight rises',
        year: 2012,
        rate: 8.4
    }
    let a = prompt('What you want to update?')

    if (a == 'title') {
        let b = prompt('What is the update?')
        movie.title = b
    } else if (a == 'year') {
        let b = prompt('What is the update?')
        movie.year = b
    } else if (a == 'rate') {
        let b = prompt('What is the update?')
        movie.rate = b
    }
    console.log(movie)
}
//bai4()
function ex4() {
    let movie = {
        title: 'The dark knight rises',
        year: 2012,
        rate: 8.4
    }
    let a = prompt('What do you want to update?')
    if (a == 'title') {
        let b = prompt('What is the update?')
        movie.title = b
    } else if (a == 'year') {
        let b = prompt('What is the update?')
        movie.year = b
    } else if (a == 'rate') {
        let b = prompt('What is the update?')
        movie.rate = b
    } else {
        alert(`${a} does not exist in our data, we will add new`)
        let newData = prompt('Enter the new data :')
        movie[a] = newData
    }
    console.log(movie)
}
// bai5()
function ex5() {
    let movies = [{
            title: 'Batman V Superman: Dawn Of Justice',
            year: 2016,
            rate: 8.0
        },
        {
            title: 'men of steel',
            year: 2013,
            rate: 7.5
        },
        {
            title: 'Spider man coming home',
            year: 2020,
            rate: 7.0
        }
    ]

    console.log(movies[0])

    console.log('*************************')
    console.log(movies.slice(-1).pop())

    console.log('*************************')
    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i])
    }

    console.log('*************************')
    for (let i = 0; i < movies.length; i++) {
        console.log('------------------------')
        console.log(movies[i].title)
        console.log(`Year : ${movies[i].year}`)
        console.log(`Rate: ${movies[i].rate}`)

    }

    console.log('*************************')
    let a = movies.slice(-1).pop()
    a.rate = a.rate + 0.7
    console.log(a)
}
// bai6()

function ex6() {
    let movie = {
        title: 'Attack on titans',
        year: 2013,
        rate: 8.8,
        casts: 'Eren Armin Mikasa'
    }
    console.log(movie.title)
    console.log(`Year: ${movie.year}`)
    console.log(`Rate: ${movie.rate}`)
    console.log(`Casts: ${movie.casts}`)
    console.log('*************************')
    movie.casts = movie.casts + ' Eren'
    console.log(movie)
}
// bai7()

function ex7() {
    let arrMovie = [{
            title: 'Men of stell',
            year: 2013,
            rate: 8.0,
            casts: 'Eric'
        },
        {
            title: 'Huong Mat tua Khoi Suong',
            year: 2018,
            rate: 8.0,
            casts: 'Eric'
        },
        {
            title: 'Iron man',
            year: 2012,
            rate: 8.0,
            casts: 'Eric'
        }
    ]
    for (let i = 0; i < arrMovie.length; i++) {
        console.log('------------------------')
        console.log(arrMovie[i].title)
        console.log(`Year : ${arrMovie[i].year}`)
        console.log(`Rate: ${arrMovie[i].rate}`)
        console.log(`Casts: ${arrMovie[i].casts}`)
    }
}