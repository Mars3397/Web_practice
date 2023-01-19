document.addEventListener('DOMContentLoaded', function() { // 等整個網頁都載入好了才開始做事情

    // get the elements by ID
    const search = document.getElementById('search-books'); 
    const bookList = document.getElementById('book-list');
    // var -> the variable might or might not be changed
    // const -> the variable will not be changed
    // let -> the variable will be changed

    console.log(search, bookList);

    // ------------------------------------------------------------------------------
    // get the elements by class or tag
    const titles = document.getElementsByClassName('title');
    const lis = document.getElementsByTagName('li');
    const first = titles[0]; // not an array but can use [] to get the element

    console.log(titles);
    console.log(first);
    console.log(Array.isArray(titles)); // titles is the HTML collection, not an array
    console.log(Array.isArray(Array.from(titles))); // Array.from() -> trun the parameter into an array

    // 2 way to iterate all the element in titles : forEach() 比較像是對所有裡面的元素做以下事情 ...
    Array.from(titles).forEach(function(title) { // .forEach(function()) only work for array object
        console.log(title); // title is like a iterator
    });

    for (i = 0; i < titles.length; i++) {
        console.log(titles[i]);
    }

    // ------------------------------------------------------------------------------
    // query selector : similar to jQuery method
    const wmf = document.querySelector('#book-list li:nth-child(2) .name');
    // nth-child(n) : get the nth element
    console.log(wmf);

    // only return the first element of the selector (in the HTML collection form)
    var books = document.querySelector('#book-list li .name'); 
    console.log(books);

    // return all the elements of the selector (in the NodeList form)
    books = document.querySelectorAll('#book-list li .name');
    console.log(books);

    Array.from(books).forEach(function(book){
        console.log(book);
    });

    // ------------------------------------------------------------------------------
    // use the query selector to change HTML content
    // var books = document.querySelector('#book-list li .name'); 
    Array.from(books).forEach(function(book){
        book.textContent += ' (Book title)'; 
        // append the string to the text content of book by .textContent
    });

    // const bookList = document.querySelector('#book-list');
    // bookList.innerHTML = '<h2>Books and more books...</h2>';
    bookList.innerHTML += '<p>This is how you add HTML content</p>';

    // ------------------------------------------------------------------------------
    // nodes : elements, text, attribute, comment ...
    const banner = document.querySelector('#page-banner');

    console.log('#page-banner node type is:', banner.nodeType); 
    console.log('#page-banner node name is:', banner.nodeName); // return the tag
    console.log('#page-banner has child nodes:', banner.hasChildNodes()); 

    // clone the node : true -> also clone the children, false -> clone only the parent node
    const clonedBanner = banner.cloneNode(true);
    console.log(clonedBanner);

    // ------------------------------------------------------------------------------
    // DOM traversal : parent -> child, child -> parent
    // const bookList = document.querySelector('#book-list');
    console.log('book list parent node:', bookList.parentNode); // same as the below
    console.log('book list parent element:', bookList.parentElement);
    console.log('book list parent parent element:', bookList.parentElement.parentElement);
    // book list -> parent -> parent

    // bookList.childNodes will get all the nodes include the text : line break
    console.log('all node children:');
    Array.from(bookList.childNodes).forEach(function(node){
        console.log(node); 
    });

    // bookList.children will not get the line break but only the element
    console.log('all element children:');
    Array.from(bookList.children).forEach(function(node){
        console.log(node);
    });

    const titles_q = bookList.querySelectorAll('.name');
    console.log('Book titles:');
    Array.from(titles_q).forEach(function(title){
        console.log(title.textContent);
    });

    // traversal : sibling -> sibling
    // const bookList = document.querySelector('#book-list');
    console.log('#book-list next sibling:', bookList.nextSibling); // next node
    console.log('#book-list next element sibling:', bookList.nextElementSibling); // next element
    console.log('#book-list previous sibling:', bookList.previousSibling); // previous node
    console.log('#book-list previous element sibling:', bookList.previousElementSibling); // previous element

    bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';

    // ------------------------------------------------------------------------------
    // "click" event
    const deleteItems = document.querySelectorAll('#book-list .delete');

    // alternative way : bubble event (preferred)
    Array.from(deleteItems).forEach(function(deleteitem){
        // addEventListener(event, call back function) -> add event in a condition
        deleteitem.addEventListener('click', (event) => {

        const li = event.target.parentElement; // event.target : the element that the event happens on
        console.log('child element to remove:', li);
        console.log('parent element to remove child from:', li.parentElement);
        // li.parentNode.removeChild(li); // remove the child elements "li" from the "li.parent"

    });
    });

    // prevent default behaviour
    const link = document.querySelector('#page-banner a');

    link.addEventListener('click', function(e) {
        e.preventDefault(); // prevent the default action of the event "click"
        console.log('Navigation to', e.target.textContent, 'was prevented');
    });

    // ------------------------------------------------------------------------------
    // event bubbling : better way to add event
    // pros 1 : do not manage the new add element 
    // pros 2 : more efficient because we only need to manage the parent event

    // delete books by having control on parent element
    const list = document.querySelector('#book-list ul');

    list.addEventListener('click', (e) => {
        if(e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    // ------------------------------------------------------------------------------
    // event for the form
    const forms = document.forms;
    console.log(forms);
    console.log(forms['add-book']); 

    Array.from(forms).forEach(function(form) {
    console.log(form);
    });

    // "submit" event
    // add books
    const addForm = forms['add-book']; // 'add-book' is the ID
    addForm.addEventListener('submit', function(e) {
        e.preventDefault(); // the default action of submit is refreshing the page

        // create elements
        const value = addForm.querySelector('input[type="text"]').value; // get the input value
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add text content
        bookName.textContent = value;
        deleteBtn.textContent = 'delete';

        // add classes (preferred) or remove classes
        bookList.classList.add('name');
        deleteBtn.classList.add('delete');
        // bookList.classList.remove('name'); // remove the class

        // append to DOM
        li.appendChild(bookName); // append book name to li first
        li.appendChild(deleteBtn); // append delete button to li after the book name
        list.appendChild(li);
        //list.insertBefore(li, list.querySelector('li:first-child')); // insert as the first li in ul
    });

    // "change" event
    // hide books -> changing the state
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e) { // change : something changed
    if(hideBox.checked) { // .check : 檢查 checkbox 有沒有被打勾
        list.style.display = "none"; // CSS property : display -> not to display
    } else {
        list.style.display = "initial"; 
    }
    });

    // "keyup" event
    // filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach((book) => {
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
            } else {
            book.style.display = 'none';
            }
        });
    });

    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target); 
        // the last target is the name of the dataset : "about" or "contact" determine by which clicked
        // the dataset is used to grab the "data-target" : e.target.dataset -> ul[data-target]
        Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
            panel.classList.add('active');
        }else{
            panel.classList.remove('active');
        }
        });
    }
    });

    // ------------------------------------------------------------------------------
    // attributes
    // get and change the attribute
    var book = document.querySelector('li:first-child .name');
    console.log(book.getAttribute('class')); // get
    book.setAttribute('class', 'haha'); // change
    console.log(book.getAttribute('class'));

    // check whether the element has the attribute
    console.log(book.hasAttribute('class'));

    // remove the attribute
    book.removeAttribute('class');
    console.log(book.hasAttribute('class'));
    book.setAttribute('class', 'haha'); 

    // ------------------------------------------------------------------------------

});
