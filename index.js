
function alert() {
    const alert = document.getElementById('alert');
    alert.innerHTML = `<div class="alert alert-warning" role="alert">
                                Insert some data :(
                       </div>`
    setTimeout(() => {
        alert.innerHTML = ``
    }, 1500);
}
const tbody = document.getElementById('tbody');
tbody.innerHTML = localStorage.getItem('innerhtml');

const deleted = function (r) {
    // console.log();
    const rownumber = r.parentNode.parentNode.rowIndex
    tbody.deleteRow(rownumber - 1);
    localStorage.setItem('innerhtml', tbody.innerHTML)

}


class Book {
    constructor(bookname, bookauthor, booktype) {
        this.bookname = bookname,
            this.bookauthor = bookauthor,
            this.booktype = booktype
    }
}
var num = 0
class DisplayBook {
    constructor(book) {
        this.book = book;
    }
    addtable = function () {
        num++;
        tbody.innerHTML += `<tr>
                        <th scope="row">${num}</th>
                        <td> ${this.book.bookname} </td>
                        <td>${this.book.bookauthor}</td>
                        <td>${this.book.booktype}</td>
                        <td> <button class="btn btn-outline-danger" onclick={deleted(this)}> X </button> </td>
                   </tr>`
        localStorage.setItem('innerhtml', tbody.innerHTML)
    }
}



const submit = document.getElementById('form_data');

let data = function (e) {
    e.preventDefault();
    const bookname = document.getElementById('bookname').value;
    const bookauthor = document.getElementById('bookauthor').value;
    const coding = document.getElementById('coding');
    const adventure = document.getElementById('adventure');
    const thrill = document.getElementById('thrill');
    var booktype = ''

    if (coding.checked) {
        booktype = coding.value
    } else if (thrill.checked) {
        booktype = thrill.value
    } else {
        booktype = adventure.value
    }
    // console.log(bookname,bookauthor,booktype,'submitted ✅');

    if(bookname!="" &&  bookauthor!=""){
        const Book1 = new Book(bookname, bookauthor, booktype);
        const display1 = new DisplayBook(Book1);
        display1.addtable()
        submit.reset()
    }
    else{
        alert()
    }
}

submit.addEventListener('submit', data);

