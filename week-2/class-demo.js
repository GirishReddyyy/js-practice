// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise

class Book {
    title, author,pages,isAvailable;

    constructor(title,author,pages,isAvailable=true){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=true;
    }

    borrow(){
        if(this.isAvailable===false){
            console.lof("book is not available");
        }else{
            console.log("you have borrowed the book");
            this.isAvailable=false;
        }
    }
    returnBook(){
        if(this.isAvailable===true){
            console.log("book is already in library");
        }else{
            console.log("you have returned the book");
            this.isAvailable=true;
        }
    }
    getInfo(){
        return '' + this.title + ' by ' + this.author + ' (' + this.pages + ' pages)';
    }

    isLongBook(){
        if(this.pages>300){
            return true;
        }else{
            return false;
        }
    }
}


//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.

let book1=new Book("Harry Potter","J.K. Rowling",350);
let book2=new Book("ram","sai",250);
let book3=new Book("max","xyz",450);
let book4=new Book("don","abc",600);
let book5=new Book("tony","asd",800);




//   2. Perform the following operations:

//       i. Display info of all books
let books=[book1,book2,book3,book4,book5];
for(let i of books){
    console.log(i.getInfo());
}

//       ii. Borrow 2 books and show their availability status
book1.borrow();
book2.borrow();

//       iii. Return 1 book and show updated status
book1.returnBook();
//       iv. Count how many books are "long books" (more than 300 pages)

//       v. List all available books



