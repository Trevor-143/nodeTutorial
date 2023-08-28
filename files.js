const fs = require('fs')

//read files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log('last line')

//write files

// fs.writeFile('./docs/blog1.txt', 'Eyyooooo warap', () => {
//     console.log('file was written')
// })

// fs.writeFile('./docs/blog2.txt', 'Eyyooooo warap this should be blog 2', () => {
//     console.log('file was created and written')
// })

//directories
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log('directory was created')
//     })
// } else (
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console,log(err)
//         }
//         console.log('directory was removed')
//     })
// )

//delete files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}