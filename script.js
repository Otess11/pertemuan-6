// Dom selection//
// getelementbyid() untuk mengembalikan element html untuk di manipulasimenggunakan js dom
// const judul = document.getElementById('judul')
// judul.style.color = 'pink'
// judul.style.backgroundColor = 'navy'
// judul.innerHTML = 'testing inner HTML'
// // getelementsbytagname
// const p = document.getElementsByTagName('p')

// console.log(p);

// // p[0].style.backgroundColor = 'navy'
// // p[1].style.backgroundColor = 'pink'

// for (let i = 0; i < p.length; i++) {
    
//     if (i == 3) {
//         p[i].style.backgroundColor = 'pink'
//         p[i].innerHTML = 'paragraf 4 baru'
//     } else 
//     p[i].style.backgroundColor = 'navy';
    
// }


// getelementbyclassname//

// const p1 = document.getElementsByClassName('p1')
// p1[0].innerHTML = 'paragraf satu yang baru'
// console.log(p1);

// const hw = document.getElementsByClassName('judul')


// queryselector// menghasilkan element seperti css 


// const p4 = document.querySelector('#b p')
// console.log(p4);
// p4.style.color = 'navy'
// p4.style.fontSize = '30px'


// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'pink'

// const p = document.querySelector('p')
// p.innerHTML = 'di ubah menggunakan javascript'

// queryselectorall menghasilkan nodelist bukan html collection

// const p = document.querySelectorAll('p')[1]

// for (let i = 0; i < p.lenght; i++) {

//     p[i].style.backgroundColor = 'red'     
// }

// const sectionB = document.getElementById('b')

// const p3 = sectionB.querySelector('p') 
// p3.style.backgroundColor = 'salmon'

// const sectionA = document.getElementById('a')
// const p2 = sectionA.querySelectorAll('p')[1]
// p2.style.backgroundColor = 'navy'
// p2.style.color = ' white'

// p2.innerHTML = 'text html baru paragraf 2'

// const sectionB = document.querySelector('section#b')
// const p4 = sectionB.getElementsByTagName('p')[0]
// console.log(p4);
// p4.style.backgroundColor = 'orange'
// p4.style.color = 'navy'

// element seatribut untuk memanipulasi atribut yang melekat kepada element html

// const judul = document.getElementById('judul')
// judul.innerHTML = '<img src="https://seeklogo.com/images/P/puma-logo-F9E13B654C-seeklogo.com.png" alt="">'

// const judul = document.getElementsByTagName('h1')[0];

// judul.setAttribute('class', 'judul judul2');

// judul.removeAttribute('class')

// const judul = document.createElement('p')
// judul.innerHTML = 'ini paragraf baru'
// document.body.appendChild(judul)

// const new_p = document.createElement('p')

// const new_text = document.createTextNode('new paragraph')

// new_p.appendChild(new_text)

// const sectionA = document.getElementById('a')
// sectionA.appendChild(new_p)

// // membuat list baru//

// const new_li = document.createElement('li')
// const newlitext = document.createTextNode('item 4')
// new_li.appendChild(newlitext)

// const ul = document.querySelector('section#b ul')

// const li2_new = ul.querySelector('li:nth-child(4)')

// ul.insertBefore(new_li, li2_new)


// // deleting element//

// const p1 = document.getElementsByClassName('p1')[0]
// sectionA.removeChild(p1)


// event js dom//

// onclick event//

const p3 = document.querySelector('.p3')
function change_color(){
    p3.style.backgroundColor = 'salmon'
    
}

const p2 = document.querySelector('.p2')
function show_alert(){
    alert('Berhasil klik paragrap');

}

const p1 = document.querySelector('.p1')
p1.onclick = show_alert;

const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul')
    const new_li = document.createElement('li')
    const text_li = document.createTextNode('ini item baru')

    new_li.appendChild(text_li)
    ul.appendChild(new_li)
})

// event mouseenter//

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'red'
    p3.innerHTML = 'tekan'

})


p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white'
    p3.innerHTML = 'paragraf 3'
    
})